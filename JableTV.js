var WidgetMetadata = {
    id: "ti.bemarkt.jable",
    title: "Jable.tv",
    description: "获取 Jable.tv 最新、热门与搜索影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "2.1.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        listModule("最新更新", "按更新时间排列", "loadLatest"),
        listModule("近期热门", "近期热度排序", "loadRecentPopular"),
        listModule("最多观看", "按观看数排序", "loadMostViewed"),
        listModule("最多收藏", "按收藏数排序", "loadMostFavorited"),
        listModule("中文字幕", "Jable 中文字幕影片", "loadChinese"),
        {
            title: "搜索影片", description: "按番号、演员或标题搜索", requiresWebView: false,
            functionName: "searchVideos", cacheDuration: 900,
            params: [
                { name: "keyword", title: "关键词", type: "input", description: "番号、演员名或标题", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

function listModule(title, description, functionName) {
    return { title: title, description: description, requiresWebView: false, functionName: functionName, cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }] };
}

const JABLE = "https://jable.tv";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
    "Cache-Control": "no-cache", "Pragma": "no-cache", "Referer": JABLE + "/"
};

async function loadLatest(p) { return fetchList(sortUrl("post_date", p)); }
async function loadRecentPopular(p) { return fetchList(sortUrl("post_date_and_popularity", p)); }
async function loadMostViewed(p) { return fetchList(sortUrl("video_viewed", p)); }
async function loadMostFavorited(p) { return fetchList(sortUrl("most_favourited", p)); }
async function loadChinese(p) { return fetchList(JABLE + "/tags/chinese-subtitle/" + pagePart(p.page)); }
async function searchVideos(p) {
    var q = String(p.keyword || "").trim();
    if (!q) return [webItem(JABLE + "/search/", "打开 Jable 搜索")];
    return fetchList(JABLE + "/search/" + encodeURIComponent(q) + "/" + pagePart(p.page));
}
function sortUrl(sort, p) {
    var u = JABLE + "/latest-updates/?sort_by=" + encodeURIComponent(sort);
    var n = Math.max(parseInt((p || {}).page, 10) || 1, 1);
    return n > 1 ? u + "&from=" + ((n - 1) * 24 + 1) : u;
}
function pagePart(page) { var n = Math.max(parseInt(page, 10) || 1, 1); return n === 1 ? "" : "page/" + n + "/"; }

async function fetchList(url) {
    try {
        var r = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true });
        if (r && r.data && r.data.length > 5000) {
            var items = parseList(r.data);
            if (items.length) return items;
        }
    } catch (e) {}
    // Important: preserve this module's URL. Never substitute latest-updates,
    // otherwise all sections falsely show the same videos.
    return [webItem(url, "打开此 Jable.tv 分类")];
}

function parseList(html) {
    var $ = Widget.html.load(html), out = [], seen = new Set();
    $("a[href]").each(function(i, el) {
        var a = $(el), href = normalize(a.attr("href") || "");
        if (!/^https:\/\/jable\.tv\/videos?\/[a-z0-9_-]+\/?$/i.test(href) || seen.has(href)) return;
        var img = a.find("img").first(), card = a.closest("article,li,.card,.item,.video,[class*='video'],[class*='item']").first();
        var cover = normalize(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "");
        if (!cover) return;
        var title = clean(a.attr("title") || img.attr("alt") || card.find("h1,h2,h3,.title,.name,[class*='title']").first().text() || a.text());
        var dur = duration(card.text() || a.text()), code = codeFromUrl(href); seen.add(href);
        out.push({ id: i + "|" + href, type: "url", title: title || code, imgSrc: cover, backdropPath: cover, mediaType: "movie", link: href, releaseDate: dur, durationText: dur, description: dur ? "时长: " + dur + " | 番号: " + code : "番号: " + code });
    });
    return out;
}

function webItem(url, title) { return { id: "jable-web-" + url, type: "url", title: title, imgSrc: JABLE + "/favicon.ico", backdropPath: JABLE + "/favicon.ico", mediaType: "movie", link: url, description: "在内置 WebView 中打开此 Jable.tv 页面" }; }

async function loadDetail(link) {
    var url = String(link || JABLE + "/latest-updates/"), fallback = webItem(url, codeFromUrl(url) || "Jable.tv 详情页");
    try {
        var r = await Widget.http.get(url, { headers: Object.assign({}, HEADERS, { Referer: url }), allow_redirects: true }), h = r && r.data ? String(r.data) : "";
        if (!h || /just a moment|cf-chl-|challenge-platform/i.test(h)) return fallback;
        var title = clean((meta(h, "og:title") || codeFromUrl(url)).replace(/\s*-\s*Jable\.TV.*$/i, "")), cover = meta(h, "og:image"), dur = durationFromHtml(h), m = h.match(/https?:\\\/\\\/[^"'\s]+\.m3u8[^"'\s]*/i) || h.match(/https?:\/\/[^"'\s]+\.m3u8[^"'\s]*/i);
        var item = { id: url, type: "url", title: title || "Jable.tv 影片", mediaType: "movie", link: url, imgSrc: cover, backdropPath: cover, releaseDate: dur, durationText: dur, description: dur ? "时长: " + dur : "Jable.tv" };
        if (m) { item.videoUrl = m[0].replace(/\\\//g, "/"); item.customHeaders = { Referer: url, Origin: JABLE, "User-Agent": HEADERS["User-Agent"] }; }
        return item;
    } catch (e) { return fallback; }
}
function duration(s) { var m = String(s || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/); return m ? m[0] : ""; }
function durationFromHtml(h) { var m = h.match(/og:video:duration["']\s+content=["'](\d+)["']/i) || h.match(/content=["'](\d+)["']\s+property=["']og:video:duration/i); if (!m) return duration(h); var n = parseInt(m[1], 10), H = Math.floor(n / 3600), M = Math.floor(n % 3600 / 60), S = n % 60; return (H ? H + ":" : "") + String(M).padStart(2, "0") + ":" + String(S).padStart(2, "0"); }
function meta(h, p) { var m = h.match(new RegExp("property=[\\\"']" + p + "[\\\"']\\\\s+content=[\\\"']([^\\\"']+)", "i")); return m ? decode(m[1]) : ""; }
function codeFromUrl(u) { var m = String(u).match(/\/videos?\/([^/?#]+)/i); return m ? decodeURIComponent(m[1]).toUpperCase() : ""; }
function normalize(v) { var s = String(v || "").trim(); if (!s) return ""; if (s.startsWith("//")) return "https:" + s; if (/^https?:\/\//i.test(s)) return s; return JABLE + (s.startsWith("/") ? "" : "/") + s; }
function decode(v) { return String(v || "").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'"); }
function clean(v) { return String(v || "").replace(/\s+/g, " ").trim(); }
