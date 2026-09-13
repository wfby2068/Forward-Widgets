/*
 * Jable.tv FORWARD template
 *
 * Mirrors the MissAV Forward structure: fetch public listing HTML, parse
 * cards into Forward media items, and open detail pages in WebView.
 * Cloudflare or other site protection falls back to a WebView URL.
 * Does not bypass DRM or protected streams.
 */

var WidgetMetadata = {
    id: "forward.jable.latest",
    title: "Jable.tv FORWARD",
    description: "获取 Jable.tv 最新影片，并转发到内置 WebView",
    author: "婉儿",
    site: "https://jable.tv",
    version: "1.1.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "最新更新",
            description: "Jable.tv 最新更新影片",
            requiresWebView: true,
            functionName: "loadPage",
            cacheDuration: 900,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

const SITE_URL = "https://jable.tv";
const LIST_PATH = "/latest-updates/";
const COMMON_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Upgrade-Insecure-Requests": "1",
    "DNT": "1",
    "Referer": SITE_URL + "/"
};

async function loadPage(params = {}) {
    const page = Math.max(parseInt(params.page, 10) || 1, 1);
    const url = page === 1 ? SITE_URL + LIST_PATH : `${SITE_URL}${LIST_PATH}page/${page}/`;
    return await fetchVideoList(url);
}

async function fetchVideoList(url) {
    try {
        const response = await Widget.http.get(url, { headers: COMMON_HEADERS, allow_redirects: true });
        if (!response || !response.data || response.data.length < 5000) {
            return [forwardListItem(url, "打开 Jable.tv 最新更新")];
        }
        const videos = parseVideoList(response.data);
        return videos.length ? videos : [forwardListItem(url, "打开 Jable.tv 最新更新")];
    } catch (error) {
        return [forwardListItem(url, "打开 Jable.tv 最新更新")];
    }
}

function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const videos = [];
    const seen = new Set();

    $("a[href]").each((index, element) => {
        const $link = $(element);
        const href = normalizeUrl($link.attr("href") || "");
        if (!isVideoLink(href) || seen.has(href)) return;

        const $img = $link.find("img").first();
        const $card = $link.closest(
            "article, li, .video-item, .video, .card, .item, .thumbnail, [class*='video'], [class*='item']"
        ).first();
        const image = $img.length ? $img : $card.find("img").first();
        const cover = normalizeUrl(
            image.attr("data-src") || image.attr("data-original") || image.attr("data-lazy-src") || image.attr("src") || ""
        );
        const title = cleanTitle(
            $link.attr("title") || image.attr("alt") ||
            $card.find("h1, h2, h3, h4, .title, .name, [class*='title'], [class*='name']").first().text() ||
            $link.text()
        );
        const duration = extractDuration($card.text() || $link.text());
        const code = extractCode(href, title);

        seen.add(href);
        videos.push({
            id: `${index}|${href}`,
            type: "url",
            title: title || code || "Jable.tv 影片",
            imgSrc: cover || SITE_URL + "/favicon.ico",
            backdropPath: cover || SITE_URL + "/favicon.ico",
            mediaType: "movie",
            link: href,
            releaseDate: duration,
            durationText: duration,
            description: duration ? `时长: ${duration}${code ? ` | 番号: ${code}` : ""}` : (code || "Jable.tv")
        });
    });
    return videos;
}

async function loadDetail(link) {
    const url = normalizeUrl(link);
    const code = extractCode(url, "");
    return {
        id: url,
        type: "url",
        title: code || "打开 Jable.tv 详情页",
        mediaType: "movie",
        link: url,
        playerType: "app",
        description: "Jable 播放需要在内置 WebView 中打开详情页；不绕过 DRM 或受保护的视频流。"
    };
}

function forwardListItem(link, title) {
    return {
        id: link,
        type: "url",
        title: title || "打开 Jable.tv",
        imgSrc: SITE_URL + "/favicon.ico",
        backdropPath: SITE_URL + "/favicon.ico",
        mediaType: "movie",
        link: link,
        description: "站点防护拦截了 HTTP 抓取，已转为 WebView 打开"
    };
}

function normalizeUrl(value) {
    const url = String(value || "").trim();
    if (!url) return "";
    if (url.startsWith("//")) return "https:" + url;
    if (/^https?:\/\//i.test(url)) return url;
    return SITE_URL + (url.startsWith("/") ? "" : "/") + url;
}

function isVideoLink(url) {
    return /^https?:\/\/jable\.tv\/videos?\/[a-z0-9][a-z0-9_-]*\/?(?:\?[^#]*)?(?:#.*)?$/i.test(url);
}

function extractCode(url, title) {
    const fromUrl = String(url || "").match(/\/videos?\/([^/?#]+)\/?/i);
    if (fromUrl) return decodeURIComponent(fromUrl[1]).toUpperCase();
    const fromTitle = String(title || "").match(/\b[A-Z]{2,}[A-Z0-9]*[-_]\d{2,}\b/i);
    return fromTitle ? fromTitle[0].toUpperCase() : "";
}

function extractDuration(text) {
    const match = String(text || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/);
    return match ? match[0] : "";
}

function cleanTitle(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}
