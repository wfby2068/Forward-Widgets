var WidgetMetadata = {
    id: "ti.bemarkt.getav",
    title: "GetAV 4K",
    description: "获取 GetAV 4K 影片",
    author: "AI 定制",
    site: "https://getav.net",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "4K 影片库",
            description: "GetAV 影片列表",
            requiresWebView: true,
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
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
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
        const response = await Widget.http.get(url, {
            headers: COMMON_HEADERS,
            allow_redirects: true
        });
        if (!response || !response.data) return [];

        if (response.data.includes("Cloudflare") || response.data.includes("Just a moment")) {
            return [{
                id: "cf_blocked",
                type: "url",
                title: "正在等待安全验证...",
                description: "请刷新页面，等待网页容器完成验证",
                mediaType: "movie",
                link: url
            }];
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

    $("a").each((index, element) => {
        const $link = $(element);
        const href = $link.attr("href") || "";
        if (!href.includes("/videos/") && !href.includes("/video/") && !href.includes("/v/")) return;

        const $img = $link.find("img").first();
        if (!$img.length) return;

        const fullVideoUrl = normalizeUrl(href);
        if (!fullVideoUrl || seenUrls.has(fullVideoUrl)) return;
        seenUrls.add(fullVideoUrl);

        const imgSrc = normalizeUrl(
            $img.attr("data-src") || $img.attr("data-original") || $img.attr("src") || ""
        );
        let title = $link.attr("title") || $img.attr("alt") || "";
        if (!title) title = $link.closest("div").find(".title, h3, h2").first().text().trim();
        if (!title) title = $link.text().trim();

        if (imgSrc) {
            videos.push({
                id: fullVideoUrl,
                type: "url",
                title: title || "未知影片",
                imgSrc: imgSrc,
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
    return {
        id: link,
        type: "webview",
        videoUrl: link,
        title: "点击播放",
        mediaType: "movie",
        link: link,
        description: "由系统网页容器加载页面"
    };
}

function normalizeUrl(url) {
    if (!url) return "";
    if (url.startsWith("//")) return "https:" + url;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return SITE_URL + (url.startsWith("/") ? "" : "/") + url;
}
