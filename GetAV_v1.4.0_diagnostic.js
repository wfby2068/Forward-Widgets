var WidgetMetadata = {
    id: "ti.bemarkt.getav",
    title: "GetAV 4K (诊断版)",
    description: "获取 GetAV 4K 影片",
    author: "AI 定制",
    site: "https://getav.net",
    version: "1.4.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "4K 影片库",
            description: "GetAV 影片列表",
            requiresWebView: false,
            functionName: "loadPage",
            cacheDuration: 1800,
            params: [
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
    let url = SITE_URL + "/zh/4k";
    if (page > 1) url += "?page=" + page;
    return await fetchVideoList(url);
}

async function fetchVideoList(url) {
    try {
        const response = await Widget.http.get(url, {
            headers: COMMON_HEADERS,
            allow_redirects: true
        });

        if (!response || !response.data) {
            return [{
                id: "err1",
                type: "url",
                title: "❌ 请求失败：无返回数据",
                description: "App 无法连接到网站",
                mediaType: "movie",
                link: url
            }];
        }

        const html = response.data;
        if (html.includes("Cloudflare") || html.includes("Just a moment") || html.includes("cf-browser-verification")) {
            return [{
                id: "err2",
                type: "url",
                title: "🛡️ 被网站安全盾 (Cloudflare) 拦截",
                description: "检测到安全验证页面，拒绝访问",
                mediaType: "movie",
                link: url
            }];
        }

        const videos = parseVideoList(html);
        if (videos.length === 0) {
            return [{
                id: "err3",
                type: "url",
                title: "⚠️ 页面解析失败 (0条)",
                description: "请求成功，但未匹配到带图视频卡片",
                mediaType: "movie",
                link: url
            }];
        }
        return videos;
    } catch (error) {
        return [{
            id: "err4",
            type: "url",
            title: "🚫 网络异常 / 报错",
            description: error && error.toString ? error.toString() : "未知请求错误",
            mediaType: "movie",
            link: url
        }];
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
        link: link
    };
}

function normalizeUrl(url) {
    if (!url) return "";
    if (url.startsWith("//")) return "https:" + url;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return SITE_URL + (url.startsWith("/") ? "" : "/") + url;
}
