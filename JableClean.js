var WidgetMetadata = {
    id: "forward.jable.clean.v1",
    title: "Jable.tv（新版）",
    description: "Jable.tv 最新、热门、收藏与中文字幕影片",
    author: "婉儿 (Waner)",
    site: "https://jable.tv",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        makeListModule("最新更新", "按最近更新排序", "loadLatest"),
        makeListModule("近期热门", "按近期热度排序", "loadTrending"),
        makeListModule("最多观看", "按观看数排序", "loadViewed"),
        makeListModule("最多收藏", "按收藏数排序", "loadFavorited"),
        makeListModule("中文字幕", "Jable 中文字幕影片", "loadChinese"),
        {
            title: "搜索影片",
            description: "按番号、演员或标题搜索",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 900,
            params: [
                { name: "keyword", title: "关键词", type: "input", description: "番号、演员名或标题", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

function makeListModule(title, description, fn) {
    return {
        title: title,
        description: description,
        requiresWebView: false,
        functionName: fn,
        cacheDuration: 1800,
        params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
    };
}

const SITE = "https://jable.tv";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Referer": SITE + "/"
};

async function loadLatest(params) { return loadCatalog("post_date", params); }
async function loadTrending(params) { return loadCatalog("post_date_and_popularity", params); }
async function loadViewed(params) { return loadCatalog("video_viewed", params); }
async function loadFavorited(params) { return loadCatalog("most_favourited", params); }
async function loadChinese(params) { return loadCatalog("chinese-subtitle", params); }

async function searchVideos(params) {
    var keyword = String((params || {}).keyword || "").trim();
    if (!keyword) return [webItem(SITE + "/search/", "打开 Jable.tv 搜索")];
    return fetchList(SITE + "/search/" + encodeURIComponent(keyword) + "/" + pagePart(params.page));
}

async function loadCatalog(kind, params) {
    var page = Math.max(parseInt((params || {}).page, 10) || 1, 1);
    var url;
    if (kind === "chinese-subtitle") {
        url = SITE + "/tags/chinese-subtitle/" + pagePart(page);
    } else {
        url = SITE + "/latest-updates/?sort_by=" + encodeURIComponent(kind) + "&from=" + ((page - 1) * 24 + 1);
    }
    return fetchList(url);
}

async function fetchList(url) {
    try {
        var response = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true });
        if (response && response.data && response.data.length > 5000) {
            var parsed = parseList(response.data);
            if (parsed.length) return parsed;
        }
    } catch (error) {}
    return [webItem(url, "打开 Jable.tv 分类")];
}

function parseList(html) {
    var $ = Widget.html.load(html);
    var items = [];
    var seen = new Set();
    $("a[href]").each(function(index, element) {
        var link = normalize($(element).attr("href") || "");
        if (!/^https:\/\/jable\.tv\/videos?\/[a-z0-9_-]+\/?$/i.test(link) || seen.has(link)) return;
        var anchor = $(element);
        var image = anchor.find("img").first();
        var card = anchor.closest("article,li,.card,.item,.video,[class*='video'],[class*='item']").first();
        var cover = normalize(image.attr("data-src") || image.attr("data-original") || image.attr("src") || "");
        if (!cover) return;
        var title = clean(anchor.attr("title") || image.attr("alt") || card.find("h1,h2,h3,.title,.name,[class*='title']").first().text() || anchor.text());
        var duration = findDuration(card.text() || anchor.text());
        var code = videoCode(link);
        seen.add(link);
        items.push({
            id: index + "|" + link,
            type: "url",
            title: title || code,
            imgSrc: cover,
            backdropPath: cover,
            mediaType: "movie",
            link: link,
            releaseDate: duration,
            durationText: duration,
            description: duration ? "时长: " + duration + " | 番号: " + code : "番号: " + code
        });
    });
    return items;
}

async function loadDetail(link) {
    var url = String(link || SITE + "/latest-updates/");
    return webItem(url, videoCode(url) || "Jable.tv 详情页");
}

function webItem(url, title) {
    return {
        id: "web|" + url,
        type: "url",
        title: title,
        imgSrc: SITE + "/favicon.ico",
        backdropPath: SITE + "/favicon.ico",
        mediaType: "movie",
        link: url,
        description: "在内置 WebView 中打开 Jable.tv"
    };
}

function pagePart(page) {
    var n = Math.max(parseInt(page, 10) || 1, 1);
    return n === 1 ? "" : "page/" + n + "/";
}

function normalize(value) {
    var text = String(value || "").trim();
    if (!text) return "";
    if (text.indexOf("//") === 0) return "https:" + text;
    if (/^https?:\/\//i.test(text)) return text;
    return SITE + (text.charAt(0) === "/" ? "" : "/") + text;
}

function videoCode(url) {
    var match = String(url).match(/\/videos?\/([^/?#]+)/i);
    return match ? decodeURIComponent(match[1]).toUpperCase() : "";
}

function findDuration(text) {
    var match = String(text || "").match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b/);
    return match ? match[0] : "";
}

function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}
