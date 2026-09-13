var WidgetMetadata = {
    id: "ti.bemarkt.jable",
    title: "Jable.tv",
    description: "获取 Jable.tv 最新影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "1.0.3",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [{
        title: "最新更新",
        description: "Jable.tv 最新更新影片",
        requiresWebView: false,
        functionName: "loadLatest",
        cacheDuration: 1800,
        params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
    }]
};

const JABLE = "https://jable.tv";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Referer": JABLE + "/"
};

async function loadLatest(params = {}) {
    const page = Math.max(parseInt(params.page, 10) || 1, 1);
    const url = page === 1 ? JABLE + "/latest-updates/" : JABLE + "/latest-updates/page/" + page + "/";
    try {
        const response = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true });
        if (response && response.data && response.data.length > 5000) {
            const items = parseJable(response.data);
            if (items.length) return items;
        }
    } catch (error) {}

    // Cloudflare fallback: always return one visible WebView item instead of an empty list.
    return [{
        id: "jable-latest-" + page,
        type: "url",
        title: "Jable.tv 最新更新 · 第 " + page + " 页",
        imgSrc: JABLE + "/favicon.ico",
        backdropPath: JABLE + "/favicon.ico",
        mediaType: "movie",
        link: url,
        videoUrl: url,
        releaseDate: "",
        description: "站点防护拦截了列表抓取，点击此项在内置 WebView 中打开"
    }];
}

function parseJable(html) {
    const $ = Widget.html.load(html);
    const result = [];
    const seen = new Set();
    $("a[href]").each((index, element) => {
        const $a = $(element);
        const href = normalize($a.attr("href") || "");
        if (!/^https:\/\/jable\.tv\/videos?\/[a-z0-9_-]+\/?$/i.test(href) || seen.has(href)) return;
        const $img = $a.find("img").first();
        const $card = $a.closest("article,li,.card,.item,.video,[class*='video'],[class*='item']").first();
        const cover = normalize($img.attr("data-src") || $img.attr("data-original") || $img.attr("src") || "");
        const title = clean($a.attr("title") || $img.attr("alt") || $card.find("h1,h2,h3,.title,.name,[class*='title']").first().text() || $a.text());
        if (!cover) return;
        seen.add(href);
        result.push({ id: index + "|" + href, type: "url", title: title || href.split("/").slice(-2,-1)[0], imgSrc: cover, backdropPath: cover, mediaType: "movie", link: href, videoUrl: href, description: "Jable.tv" });
    });
    return result;
}

async function loadDetail(link) {
    const url = String(link || JABLE + "/latest-updates/");
    return { id: url, type: "url", title: "Jable.tv 详情页", imgSrc: JABLE + "/favicon.ico", backdropPath: JABLE + "/favicon.ico", mediaType: "movie", link: url, videoUrl: url, description: "在内置 WebView 中打开 Jable.tv 详情页" };
}

function normalize(value) {
    const s = String(value || "").trim();
    if (!s) return "";
    if (s.startsWith("//")) return "https:" + s;
    if (/^https?:\/\//i.test(s)) return s;
    return JABLE + (s.startsWith("/") ? "" : "/") + s;
}
function clean(value) { return String(value || "").replace(/\s+/g, " ").trim(); }
