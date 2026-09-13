var WidgetMetadata = {
    id: "ti.bemarkt.jable.v3",
    title: "Jable.tv 分类版",
    description: "Jable.tv 最新、热门、中文字幕与搜索",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "3.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        listModule("最新更新", "Jable.tv 最近更新", "loadLatest"),
        listModule("近期热门", "Jable.tv 近期热门", "loadRecent"),
        listModule("最多观看", "Jable.tv Most Viewed", "loadViewed"),
        listModule("最多收藏", "Jable.tv Most Favourited", "loadFavorited"),
        listModule("中文字幕", "Jable.tv 中文字幕", "loadChinese"),
        {
            title: "搜索影片", description: "按番号或演员搜索", requiresWebView: false,
            functionName: "searchVideos", cacheDuration: 900,
            params: [{ name: "keyword", title: "关键词", type: "input", description: "番号或演员名", value: "" }, { name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        }
    ]
};

function listModule(title, description, fn) {
    return { title: title, description: description, requiresWebView: false, functionName: fn, cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }] };
}

const JABLE = "https://jable.tv";
const HEADERS = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8", "Cache-Control": "no-cache", "Pragma": "no-cache", "Referer": JABLE + "/" };

async function loadLatest(p) { return fetchList(route("post_date", p)); }
async function loadRecent(p) { return fetchList(route("post_date_and_popularity", p)); }
async function loadViewed(p) { return fetchList(route("video_viewed", p)); }
async function loadFavorited(p) { return fetchList(route("most_favourited", p)); }
async function loadChinese(p) { return fetchList(JABLE + "/tags/chinese-subtitle/" + page(p)); }
async function searchVideos(p) { var q = String(p.keyword || "").trim(); return q ? fetchList(JABLE + "/search/" + encodeURIComponent(q) + "/" + page(p.page)) : [web(JABLE + "/search/", "打开 Jable 搜索")]; }
function route(sort, p) { var n = Math.max(parseInt((p || {}).page, 10) || 1, 1); return JABLE + "/latest-updates/?sort_by=" + sort + "&from=" + ((n - 1) * 24 + 1); }
function page(p) { var n = Math.max(parseInt(p, 10) || 1, 1); return n === 1 ? "" : "page/" + n + "/"; }

async function fetchList(url) {
    try { var r = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true }); if (r && r.data && r.data.length > 5000) { var a = parse(r.data); if (a.length) return a; } } catch (e) {}
    return [web(url, "打开当前 Jable 分类")];
}
function parse(html) {
    var $ = Widget.html.load(html), out = [], seen = new Set();
    $("a[href]").each(function(i, el) {
        var a = $(el), href = norm(a.attr("href") || "");
        if (!/^https:\/\/jable\.tv\/videos?\/[a-z0-9_-]+\/?$/i.test(href) || seen.has(href)) return;
        var img = a.find("img").first(), card = a.closest("article,li,.card,.item,.video,[class*='video'],[class*='item']").first(), cover = norm(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "");
        if (!cover) return;
        var title = clean(a.attr("title") || img.attr("alt") || card.find("h1,h2,h3,.title,.name,[class*='title']").first().text() || a.text()), d = dur(card.text() || a.text()), code = codeOf(href); seen.add(href);
        out.push({ id: i + "|" + href, type: "url", title: title || code, imgSrc: cover, backdropPath: cover, mediaType: "movie", link: href, releaseDate: d, durationText: d, description: d ? "时长: " + d + " | 番号: " + code : "番号: " + code });
    }); return out;
}
function web(url, title) { return { id: "jable-web-" + url, type: "url", title: title, imgSrc: JABLE + "/favicon.ico", backdropPath: JABLE + "/favicon.ico", mediaType: "movie", link: url, description: "在内置 WebView 中打开当前 Jable 页面" }; }
async function loadDetail(link) { return web(String(link || JABLE + "/latest-updates/"), "Jable.tv 详情页"); }
function norm(v) { var s = String(v || "").trim(); if (!s) return ""; if (s.startsWith("//")) return "https:" + s; if (/^https?:\/\//i.test(s)) return s; return JABLE + (s.startsWith("/") ? "" : "/") + s; }
function codeOf(u) { var m = String(u).match(/\/videos?\/([^/?#]+)/i); return m ? decodeURIComponent(m[1]).toUpperCase() : ""; }
function dur(s) { var m = String(s || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/); return m ? m[0] : ""; }
function clean(v) { return String(v || "").replace(/\s+/g, " ").trim(); }
