var WidgetMetadata = {
    id: "ti.bemarkt.jable",
    title: "Jable.tv",
    description: "获取 Jable.tv 分类影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        simpleModule("今日热门", "loadTodayHot"),
        simpleModule("本周热门", "loadWeeklyHot"),
        simpleModule("本月热门", "loadMonthlyHot"),
        simpleModule("新作上市", "loadNewRelease"),
        simpleModule("中文字幕", "loadChineseSubtitle"),
        categoryModule("无码影片库", ["uncensored-leak", "fc2", "heyzo", "tokyohot", "caribbeancom", "gachinco"]),
        categoryModule("亚洲AV专区", ["madou", "klive", "clive"]),
        categoryModule("影片质量类", ["hd", "exclusive", "solo", "full-hd", "low-cost", "package"]),
        categoryModule("角色与身份", ["人妻", "熟女", "素人", "美少女", "痴女", "女高中生", "秘书", "家庭主妇", "大小姐"]),
        categoryModule("性行为类型", ["中出", "口交", "骑乘", "潮吹", "乳交", "颜射", "自慰", "手淫", "3p", "多人", "洗澡"]),
        categoryModule("情节与主题", ["企划", "乱伦", "ntr", "搭讪", "淫乱", "剧情", "羞辱"]),
        categoryModule("特殊玩法类", ["多人运动", "拘束", "脏话", "催眠洗脑", "口球", "放置play", "奴隶"]),
        categoryModule("身材特征类", ["巨乳", "苗条", "美乳", "美尻", "性感的腿", "小乳房"]),
        categoryModule("职业角色类", ["接待员", "女导游", "啦啦队", "空中小姐", "台湾模特儿", "迷你裙女警", "演员"]),
        categoryModule("拍摄方式类", ["自拍", "偷拍", "第一次拍摄", "主观性", "记录", "按摩"]),
        categoryModule("时长合集类", ["4小时以上", "合集"]),
        categoryModule("服装造型类", ["裙子", "浴衣", "连裤袜", "面具", "靴子", "高跟鞋", "围裙", "金发"]),
        categoryModule("特殊题材类", ["sf", "洛丽塔", "御宅", "魔法少女", "3d", "ai生成的作品", "动漫人物", "虚拟现实", "动画", "偶像"]),
        {
            title: "搜索影片", description: "按番号、演员或标题搜索", requiresWebView: false,
            functionName: "searchVideos", cacheDuration: 1800,
            params: [{ name: "keyword", title: "关键词", type: "input", description: "番号或演员名", value: "" }, { name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        }
    ]
};

function simpleModule(title, fn) {
    return { title: title, description: title + "影片", requiresWebView: false, functionName: fn, cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }] };
}
function categoryModule(title, values) {
    return { title: title, description: title + "分类", requiresWebView: false, functionName: "loadCategory", cacheDuration: 1800, params: [{ name: "category", title: "选择分类", type: "enumeration", description: "选择分类", value: values[0], enumOptions: values.map(function(v) { return { title: v, value: v }; }) }, { name: "page", title: "页码", type: "page", description: "页码", value: "1" }] };
}

const JABLE = "https://jable.tv";
const HEADERS = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8", "Cache-Control": "no-cache", "Pragma": "no-cache", "Referer": JABLE + "/" };

async function loadTodayHot(p) { return fetchList(pageUrl("/today-hot/", p)); }
async function loadWeeklyHot(p) { return fetchList(pageUrl("/weekly-hot/", p)); }
async function loadMonthlyHot(p) { return fetchList(pageUrl("/monthly-hot/", p)); }
async function loadNewRelease(p) { return fetchList(pageUrl("/latest-updates/", p)); }
async function loadChineseSubtitle(p) { return fetchList(pageUrl("/tags/chinese-subtitle/", p)); }
async function loadCategory(p) { return fetchList(JABLE + "/tags/" + encodeURIComponent(p.category || "") + "/" + pagePart(p.page)); }
async function searchVideos(p) { var q = String(p.keyword || "").trim(); return q ? fetchList(JABLE + "/search/" + encodeURIComponent(q) + "/" + pagePart(p.page)) : [{ id: "jable-search", type: "url", title: "请输入搜索关键词", mediaType: "movie", link: JABLE + "/search/", description: "在 WebView 中打开搜索" }]; }
function pageUrl(path, p) { return JABLE + path + pagePart(p && p.page); }
function pagePart(page) { var n = Math.max(parseInt(page, 10) || 1, 1); return n === 1 ? "" : "page/" + n + "/"; }

async function fetchList(url) {
    try { var r = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true }); if (r && r.data && r.data.length > 5000) { var a = parseList(r.data); if (a.length) return a; } } catch (e) {}
    return [{ id: "jable-page-" + url, type: "url", title: "打开 Jable.tv 分类页面", imgSrc: JABLE + "/favicon.ico", backdropPath: JABLE + "/favicon.ico", mediaType: "movie", link: url, description: "站点防护拦截了列表抓取，点击此项在 WebView 中打开" }];
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
async function loadDetail(link) {
    var url = String(link || JABLE + "/latest-updates/"), fallback = { id: url, type: "url", title: codeFromUrl(url) || "Jable.tv 详情页", mediaType: "movie", link: url, description: "在 WebView 中打开 Jable.tv 详情页" };
    try { var r = await Widget.http.get(url, { headers: Object.assign({}, HEADERS, { Referer: url }), allow_redirects: true }), h = r && r.data ? String(r.data) : ""; if (!h || /just a moment|cf-chl-|challenge-platform/i.test(h)) return fallback; var t = clean((meta(h, "og:title") || codeFromUrl(url)).replace(/\s*-\s*Jable\.TV.*$/i, "")), c = meta(h, "og:image"), d = durationFromHtml(h), m = h.match(/https?:\\\/\\\/[^"'\s]+\.m3u8[^"'\s]*/i) || h.match(/https?:\/\/[^"'\s]+\.m3u8[^"'\s]*/i); var item = { id: url, type: "url", title: t || "Jable.tv 影片", mediaType: "movie", link: url, imgSrc: c, backdropPath: c, releaseDate: d, durationText: d, description: d ? "时长: " + d : "Jable.tv" }; if (m) { item.videoUrl = m[0].replace(/\\\//g, "/"); item.customHeaders = { Referer: url, Origin: JABLE, "User-Agent": HEADERS["User-Agent"] }; } return item; } catch (e) { return fallback; }
}
function duration(s) { var m = String(s || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/); return m ? m[0] : ""; }
function durationFromHtml(h) { var m = h.match(/og:video:duration["']\s+content=["'](\d+)["']/i) || h.match(/content=["'](\d+)["']\s+property=["']og:video:duration/i); if (!m) return duration(h); var n = parseInt(m[1], 10), H = Math.floor(n / 3600), M = Math.floor(n % 3600 / 60), S = n % 60; return (H ? H + ":" : "") + String(M).padStart(2, "0") + ":" + String(S).padStart(2, "0"); }
function meta(h, p) { var m = h.match(new RegExp("property=[\\\"']" + p + "[\\\"']\\\\s+content=[\\\"']([^\\\"']+)", "i")); return m ? decode(m[1]) : ""; }
function codeFromUrl(u) { var m = String(u).match(/\/videos?\/([^/?#]+)/i); return m ? decodeURIComponent(m[1]).toUpperCase() : ""; }
function normalize(v) { var s = String(v || "").trim(); if (!s) return ""; if (s.startsWith("//")) return "https:" + s; if (/^https?:\/\//i.test(s)) return s; return JABLE + (s.startsWith("/") ? "" : "/") + s; }
function decode(v) { return String(v || "").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'"); }
function clean(v) { return String(v || "").replace(/\s+/g, " ").trim(); }
