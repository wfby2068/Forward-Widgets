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
            return [];
        }

        return parseVideoList(response.data);
    } catch (error) {
        return [];
    }
}

function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const videos = [];
    const seenUrls = new Set();

    $('a[href*="/video/"], a[href*="/v/"]').each((index, element) => {
        const $link = $(element);
        const href = $link.attr("href") || "";
        const $img = $link.find("img").first();

        if (!href || !$img.length) {
            return;
        }

        const link = normalizeUrl(href);
        if (!link || seenUrls.has(link)) {
            return;
        }
        seenUrls.add(link);

        const imgSrc = normalizeUrl(
            $img.attr("data-src") ||
            $img.attr("data-original") ||
            $img.attr("src") ||
            ""
        );

        const title = extractTitle($, $link, $img);

        if (imgSrc) {
            videos.push({
                id: link,
                type: "url",
                title: title || "未知影片",
                imgSrc: imgSrc,
                backdropPath: imgSrc,
                mediaType: "movie",
                link: link,
                description: "GetAV 4K"
            });
        }
    });

    return videos;
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

function normalizeUrl(url) {
    if (!url) {
        return "";
    }
    if (url.startsWith("//")) {
        return "https:" + url;
    }
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function extractTitle($, $link, $img) {
    const candidates = [
        $link.attr("title"),
        $img.attr("alt"),
        $link.closest("div").find("h1, h2, h3, .title, .name").first().text(),
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
    return (title || "")
        .replace(/\s+/g, " ")
        .replace(/\s*-\s*GetAV.*$/i, "")
        .trim();
}
