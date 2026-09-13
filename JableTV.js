var WidgetMetadata = {
    id: "ti.bemarkt.jable",
    title: "Jable.tv",
    description: "获取 Jable.tv 分类影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "1.3.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        module("最新更新", "Jable.tv 最新更新影片", "loadLatest"),
        module("最热视频", "Jable.tv 热门影片", "loadPopular"),
        module("中文字幕", "Jable.tv 中文字幕影片", "loadChinese"),
        module("搜索影片", "按番号或演员搜索 Jable.tv", "searchVideos", [
            { name: "keyword", title: "关键词", type: "input", description: "番号、演员名或标题", value: "" },
            { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
        ])
    ]
};

function module(title, description, functionName, params) {
    return { title: title, description: description, requiresWebView: false, functionName: functionName, cacheDuration: 1800, params: params || [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }] };
}

const JABLE = "https://jable.tv";
const HEADERS = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8", "Cache-Control": "no-cache", "Pragma": "no-cache", "Referer": JABLE + "/" };

async function loadLatest(params = {}) { return fetchList(pageUrl("/latest-updates/", params.page), params); }
async function loadPopular(params = {}) { return fetchList(pageUrl("/popular/", params.page), params); }
async function loadChinese(params = {}) { return fetchList(pageUrl("/tags/chinese-subtitle/", params.page), params); }
async function searchVideos(params = {}) {
    var q = String(params.keyword || "").trim();
    if (!q) return [{ id: "jable-search", type: "url", title: "请输入搜索关键词", mediaType: "movie", link: JABLE + "/search/", description: "在 WebView 中打开 Jable 搜索" }];
    return fetchList(JABLE + "/search/" + encodeURIComponent(q) + "/", params);
}

function pageUrl(path, page) { var n = Math.max(parseInt(page, 10) || 1, 1); return n === 1 ? JABLE + path : JABLE + path.replace(/\/$/, "") + "/page/" + n + "/"; }
async function fetchList(url, params) {
    try {
        var response = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true });
        if (response && response.data && response.data.length > 5000) { var items = parseJable(response.data); if (items.length) return items; }
    } catch (error) {}
    return [{ id: "jable-page-" + url, type: "url", title: "打开 Jable.tv 分类页面", imgSrc: JABLE + "/favicon.ico", backdropPath: JABLE + "/favicon.ico", mediaType: "movie", link: url, description: "站点防护拦截了列表抓取，点击此项在内置 WebView 中打开" }];
}

function parseJable(html) {
    var $ = Widget.html.load(html), result = [], seen = new Set();
    $("a[href]").each(function(index, element) {
        var $a = $(element), href = normalize($a.attr("href") || "");
        if (!/^https:\/\/jable\.tv\/videos?\/[a-z0-9_-]+\/?$/i.test(href) || seen.has(href)) return;
        var $img = $a.find("img").first(), $card = $a.closest("article,li,.card,.item,.video,[class*='video'],[class*='item']").first();
        var cover = normalize($img.attr("data-src") || $img.attr("data-original") || $img.attr("src") || "");
        var title = clean($a.attr("title") || $img.attr("alt") || $card.find("h1,h2,h3,.title,.name,[class*='title']").first().text() || $a.text());
        var duration = extractDuration($card.text() || $a.text());
        if (!cover) return;
        seen.add(href);
        var code = codeFromUrl(href);
        result.push({ id: index + "|" + href, type: "url", title: title || code, imgSrc: cover, backdropPath: cover, mediaType: "movie", link: href, releaseDate: duration, durationText: duration, description: duration ? "时长: " + duration + " | 番号: " + code : "番号: " + code });
    });
    return result;
}

async function loadDetail(link) {
    var url = String(link || JABLE + "/latest-updates/");
    var fallback = { id: url, type: "url", title: codeFromUrl(url) || "Jable.tv 详情页", mediaType: "movie", link: url, description: "在内置 WebView 中打开 Jable.tv 详情页" };
    try {
        var response = await Widget.http.get(url, { headers: Object.assign({}, HEADERS, { Referer: url }), allow_redirects: true });
        var html = response && response.data ? String(response.data) : "";
        if (!html || /just a moment|cf-chl-|challenge-platform/i.test(html)) return fallback;
        var title = meta(html, "og:title") || codeFromUrl(url) || "Jable.tv 影片", cover = meta(html, "og:image"), duration = extractDurationFromHtml(html), hls = findHls(html);
        var item = { id: url, type: "url", title: clean(title.replace(/\s*-\s*Jable\.TV.*$/i, "")), mediaType: "movie", link: url, imgSrc: cover, backdropPath: cover, releaseDate: duration, durationText: duration, description: duration ? "时长: " + duration : "Jable.tv" };
        if (hls) { item.videoUrl = hls; item.customHeaders = { Referer: url, Origin: JABLE, "User-Agent": HEADERS["User-Agent"] }; }
        return item;
    } catch (error) { return fallback; }
}

function findHls(html) { var ps = [/https?:\\\/\\\/[^"'\s]+\.m3u8[^"'\s]*/i, /https?:\/\/[^"'\s]+\.m3u8[^"'\s]*/i]; for (var p of ps) { var m = html.match(p); if (m) return m[0].replace(/\\\//g, "/"); } return ""; }
function extractDuration(text) { var m = String(text || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/); return m ? m[0] : ""; }
function extractDurationFromHtml(html) { var m = html.match(/og:video:duration["']\s+content=["'](\d+)["']/i) || html.match(/content=["'](\d+)["']\s+property=["']og:video:duration/i); return m ? formatSeconds(parseInt(m[1], 10)) : extractDuration(html); }
function formatSeconds(n) { if (!Number.isFinite(n) || n <= 0) return ""; var h = Math.floor(n / 3600), m = Math.floor((n % 3600) / 60), s = n % 60; return (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); }
function meta(html, property) { var p = new RegExp("property=[\\\"']" + property.replace(":", "\\\\:") + "[\\\"']\\\\s+content=[\\\"']([^\\\"']+)", "i"), m = html.match(p); return m ? decode(m[1]) : ""; }
function codeFromUrl(url) { var m = String(url).match(/\/videos?\/([^/?#]+)/i); return m ? decodeURIComponent(m[1]).toUpperCase() : ""; }
function normalize(value) { var s = String(value || "").trim(); if (!s) return ""; if (s.startsWith("//")) return "https:" + s; if (/^https?:\/\//i.test(s)) return s; return JABLE + (s.startsWith("/") ? "" : "/") + s; }
function decode(value) { return String(value || "").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'"); }
function clean(value) { return String(value || "").replace(/\s+/g, " ").trim(); }
