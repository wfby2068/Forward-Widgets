var WidgetMetadata = {
    id: "ti.bemarkt.getav",
    title: "GetAV 4K",
    description: "获取 GetAV 4K 影片并以内置模式播放",
    author: "AI 定制",
    site: "https://getav.net",
    version: "1.2.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [{
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
                    { title: "最热 (Popular)", value: "popular" },
                    { title: "最新 (Recent)", value: "recent" }
                ]
            },
            { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
        ]
    }]
};

const SITE_URL = "https://getav.net";
const COMMON_HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Referer": SITE_URL + "/"
};

async function loadPage(params = {}) {
    const page = Math.max(parseInt(params.page, 10) || 1, 1);
    const sortBy = params.sort_by || "popular";
    let url = `${SITE_URL}/zh/4k?sort=${encodeURIComponent(sortBy)}`;
    if (page > 1) url += `&page=${page}`;
    return await fetchVideoList(url);
}

async function fetchVideoList(url) {
    try {
        const response = await Widget.http.get(url, { headers: COMMON_HEADERS, allow_redirects: true });
        if (!response || !response.data || response.data.length < 500) return [];
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
        if (!$img.length || !href) return;

        const fullVideoUrl = normalizeUrl(href);
        if (!fullVideoUrl || seenUrls.has(fullVideoUrl)) return;
        seenUrls.add(fullVideoUrl);

        const imgSrc = normalizeUrl(
            $img.attr("data-src") || $img.attr("data-original") || $img.attr("src") || ""
        );
        let title = cleanTitle($link.attr("title") || $img.attr("alt") || "");
        if (!title) title = cleanTitle($link.closest("div").find("h2, h3, .title, .name").first().text());
        if (!title) title = cleanTitle($link.text());

        if (imgSrc) {
            videos.push({
                id: fullVideoUrl,
                type: "url",
                title: title || "未知影片",
                imgSrc,
                backdropPath: imgSrc,
                mediaType: "movie",
                link: fullVideoUrl,
                description: "GetAV 4K"
            });
        }
    });
    return videos;
}

async function loadDetail(link) {
    try {
        const response = await Widget.http.get(link, {
            headers: { ...COMMON_HEADERS, "Referer": link },
            allow_redirects: true
        });
        let title = "GetAV 影片";
        if (response && response.data) {
            const $ = Widget.html.load(response.data);
            title = cleanTitle($("title").text().replace(/-.*GetAV.*/i, "")) || title;
        }
        return {
            id: link,
            type: "webview",
            videoUrl: link,
            title,
            mediaType: "movie",
            link,
            description: "正在由内置内核加载页面播放..."
        };
    } catch (error) {
        return {
            id: link,
            type: "webview",
            videoUrl: link,
            title: "点击播放",
            link
        };
    }
}

function normalizeUrl(url) {
    if (!url) return "";
    if (url.startsWith("//")) return "https:" + url;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return SITE_URL + (url.startsWith("/") ? "" : "/") + url;
}

function cleanTitle(title) {
    return (title || "").replace(/\s+/g, " ").trim();
}
