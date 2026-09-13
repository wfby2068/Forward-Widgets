var WidgetMetadata = {
    id: "ti.bemarkt.jable",
    title: "Jable.tv",
    description: "获取 Jable.tv 最新影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "1.0.1",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "最新更新",
            description: "Jable.tv 最新更新影片",
            requiresWebView: false,
            functionName: "loadLatest",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

async function loadLatest(params = {}) {
    var page = Math.max(parseInt(params.page, 10) || 1, 1);
    var url = page === 1 ? "https://jable.tv/latest-updates/" : "https://jable.tv/latest-updates/page/" + page + "/";
    return [{
        id: url,
        type: "url",
        title: "Jable.tv 最新更新",
        mediaType: "movie",
        link: url,
        coverUrl: "https://jable.tv/favicon.ico",
        backdropPath: "https://jable.tv/favicon.ico",
        description: "在内置 WebView 中打开 Jable.tv 最新更新"
    }];
}

async function loadDetail(link) {
    return {
        id: link,
        type: "url",
        title: "Jable.tv 详情页",
        mediaType: "movie",
        link: link,
        coverUrl: "https://jable.tv/favicon.ico",
        backdropPath: "https://jable.tv/favicon.ico",
        description: "在内置 WebView 中打开 Jable.tv 详情页"
    };
}
