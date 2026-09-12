/*
 * GetAV FORWARD template
 *
 * Purpose:
 * - Fetch and parse the site's public listing pages.
 * - Forward detail/playback to the built-in WebView.
 * - Do not attempt to bypass encryption, DRM, or protected streams.
 */

var WidgetMetadata = {
    id: "forward.getav.4k",
    title: "GetAV 4K FORWARD",
    description: "获取 GetAV 4K 影片列表，并转发到内置 WebView 播放",
    author: "Custom",
    site: "https://getav.net",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "4K 影片库",
            description: "GetAV 4K 分类",
            requiresWebView: false,
            functionName: "loadPage",
            cacheDuration: 1800,
            params: [
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    description: "排序方式",
                    value: "popular",
                    enumOptions: [
                        { title: "最热", value: "popular" },
                        { title: "最新", value: "recent" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "页码",
                    value: "1"
                }
            ]
        }
    ]
};

const SITE_URL = "https://getav.net";
const LIST_PATH = "/zh/4k";

const COMMON_HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Referer": SITE_URL + "/"
};

async function loadPage(params = {}) {
    const page = Math.max(parseInt(params.page, 10) || 1, 1);
    const sortBy = params.sort_by || "popular";

    let url = `${SITE_URL}${LIST_PATH}?sort=${encodeURIComponent(sortBy)}`;
    if (page > 1) {
        url += `&page=${page}`;
    }

    return await fetchVideoList(url);
}

async function fetchVideoList(url) {
    try {
        const response = await Widget.http.get(url, {
            headers: COMMON_HEADERS,
            allow_redirects: true
        });

        if (!response || !response.data || response.data.length < 500) {
            return [forwardListItem(url, "打开 GetAV 4K 列表")];
        }

        const videos = parseVideoList(response.data);
        return videos.length ? videos : [forwardListItem(url, "打开 GetAV 4K 列表")];
    } catch (error) {
        return [forwardListItem(url, "打开 GetAV 4K 列表")];
    }
}

function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const videos = [];
    const seenUrls = new Set();

    parseDomLinks($, videos, seenUrls);
    parseEmbeddedJson(html, videos, seenUrls);
    parseHrefFallback(html, videos, seenUrls);

    return videos;
}

function parseDomLinks($, videos, seenUrls) {
    $('a[href*="/video/"], a[href*="/v/"]').each((index, element) => {
        const $link = $(element);
        const href = $link.attr("href") || "";

        if (!href) {
            return;
        }

        const link = normalizeUrl(href);
        if (!isVideoLink(link)) {
            return;
        }

        const $card = $link.closest("article, li, .item, .card, .video, div").first();
        const $img = $link.find("img").first().length
            ? $link.find("img").first()
            : $card.find("img").first();
        const imgSrc = normalizeUrl(
            $img.attr("data-src") ||
            $img.attr("data-original") ||
            $img.attr("data-lazy-src") ||
            $img.attr("src") ||
            ""
        );

        const title = extractTitle($, $link, $img, $card);
        pushVideo(videos, seenUrls, link, title, imgSrc);
    });
}

function parseEmbeddedJson(html, videos, seenUrls) {
    const jsonBlocks = [];
    const nextDataMatch = html.match(/<script[^>]+id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i);
    if (nextDataMatch) {
        jsonBlocks.push(nextDataMatch[1]);
    }

    const scriptPattern = /<script[^>]*>\s*(?:self\.__next_f\.push\()?([\s\S]{20,}?)\)?\s*<\/script>/gi;
    let scriptMatch;
    while ((scriptMatch = scriptPattern.exec(html)) !== null) {
        if (scriptMatch[1] && /video|thumb|poster|cover|title|slug/i.test(scriptMatch[1])) {
            jsonBlocks.push(scriptMatch[1]);
        }
    }

    for (const block of jsonBlocks) {
        tryParseJsonLike(block, videos, seenUrls);
    }
}

function tryParseJsonLike(raw, videos, seenUrls) {
    const text = decodeText(raw);
    const objectMatches = text.match(/\{[^{}]*(?:title|name|slug|href|url|cover|thumb|poster|image)[^{}]*\}/gi) || [];

    for (const fragment of objectMatches) {
        const linkValue = pickString(fragment, ["url", "href", "link", "path", "slug", "permalink"]);
        const title = pickString(fragment, ["title", "name", "videoTitle"]);
        const imgSrc = pickString(fragment, ["cover", "coverUrl", "thumbnail", "thumbnailUrl", "thumb", "poster", "image", "imageUrl"]);
        const link = normalizeVideoCandidate(linkValue);

        if (link) {
            pushVideo(videos, seenUrls, link, title, normalizeUrl(imgSrc));
        }
    }
}

function parseHrefFallback(html, videos, seenUrls) {
    const hrefPattern = /href=["']([^"']*(?:\/video\/|\/v\/)[^"']*)["'][^>]*>([\s\S]{0,500}?)(?=<\/a>)/gi;
    let hrefMatch;
    while ((hrefMatch = hrefPattern.exec(html)) !== null) {
        const link = normalizeUrl(decodeText(hrefMatch[1]));
        if (!isVideoLink(link)) {
            continue;
        }

        const innerHtml = hrefMatch[2] || "";
        const title =
            cleanTitle(stripTags(innerHtml)) ||
            cleanTitle(pickAttribute(innerHtml, "alt")) ||
            cleanTitle(pickAttribute(innerHtml, "title"));
        const imgSrc = normalizeUrl(
            pickAttribute(innerHtml, "data-src") ||
            pickAttribute(innerHtml, "data-original") ||
            pickAttribute(innerHtml, "src")
        );

        pushVideo(videos, seenUrls, link, title, imgSrc);
    }
}

function pushVideo(videos, seenUrls, link, title, imgSrc) {
    if (!link || seenUrls.has(link)) {
        return;
    }
    seenUrls.add(link);

    videos.push({
        id: link,
        type: "url",
        title: title || "未知影片",
        imgSrc: imgSrc || SITE_URL + "/favicon.ico",
        backdropPath: imgSrc || SITE_URL + "/favicon.ico",
        mediaType: "movie",
        link: link,
        description: "GetAV 4K"
    });
}

async function loadDetail(link) {
    const targetUrl = normalizeUrl(link);
    const title = await fetchDetailTitle(targetUrl);

    return forwardToWebView(targetUrl, title);
}

async function fetchDetailTitle(link) {
    try {
        const response = await Widget.http.get(link, {
            headers: {
                ...COMMON_HEADERS,
                "Referer": link
            },
            allow_redirects: true
        });

        if (!response || !response.data) {
            return "GetAV 影片";
        }

        const $ = Widget.html.load(response.data);
        return cleanTitle($("title").text()) || "GetAV 影片";
    } catch (error) {
        return "GetAV 影片";
    }
}

function forwardToWebView(link, title) {
    return {
        id: link,
        type: "webview",
        videoUrl: link,
        title: title || "点击播放",
        mediaType: "movie",
        link: link,
        description: "已转发到内置 WebView，由网站页面自行加载播放"
    };
}

function forwardListItem(link, title) {
    return {
        id: link,
        type: "webview",
        videoUrl: link,
        title: title || "打开列表",
        imgSrc: SITE_URL + "/favicon.ico",
        backdropPath: SITE_URL + "/favicon.ico",
        mediaType: "movie",
        link: link,
        description: "HTTP 抓取被站点防护拦截，已改为 WebView 打开"
    };
}

function normalizeUrl(url) {
    if (!url) {
        return "";
    }
    url = decodeText(String(url)).trim();
    if (url.startsWith("//")) {
        return "https:" + url;
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function normalizeVideoCandidate(value) {
    if (!value) {
        return "";
    }

    const raw = decodeText(String(value)).trim();
    if (!raw) {
        return "";
    }

    const url = raw.startsWith("/") || raw.startsWith("http")
        ? normalizeUrl(raw)
        : normalizeUrl(`/zh/video/${raw}`);

    return isVideoLink(url) ? url : "";
}

function isVideoLink(link) {
    return /^https?:\/\/getav\.net\/(?:[a-z]{2}\/)?(?:video|v)\//i.test(link || "");
}

function extractTitle($, $link, $img, $card) {
    const candidates = [
        $link.attr("title"),
        $img.attr("alt"),
        $card.find("h1, h2, h3, .title, .name, [class*='title'], [class*='name']").first().text(),
        $link.text()
    ];

    for (const value of candidates) {
        const title = cleanTitle(value);
        if (title) {
            return title;
        }
    }

    return "";
}

function cleanTitle(title) {
    return decodeText(title || "")
        .replace(/\s+/g, " ")
        .replace(/\s*-\s*GetAV.*$/i, "")
        .trim();
}

function pickString(text, keys) {
    for (const key of keys) {
        const pattern = new RegExp(`["']${key}["']\\s*:\\s*["']([^"']+)["']`, "i");
        const match = text.match(pattern);
        if (match) {
            return decodeText(match[1]);
        }
    }
    return "";
}

function pickAttribute(html, name) {
    const pattern = new RegExp(`${name}=["']([^"']+)["']`, "i");
    const match = html.match(pattern);
    return match ? decodeText(match[1]) : "";
}

function stripTags(html) {
    return decodeText(String(html || "").replace(/<[^>]+>/g, " "));
}

function decodeText(text) {
    return String(text || "")
        .replace(/\\u002F/g, "/")
        .replace(/\\u003C/g, "<")
        .replace(/\\u003E/g, ">")
        .replace(/\\u0026/g, "&")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}
