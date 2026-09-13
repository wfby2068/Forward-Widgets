var WidgetMetadata = {
    id: "ti.bemarkt.jabletv",
    title: "JableTV",
    description: "获取 Jable.tv 最新影片",
    author: "婉儿 (Waner)",
    site: "https://widgets-xd.vercel.app",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 300,
    modules: [
        {
            title: "最新更新",
            description: "Jable.tv 最新更新影片",
            requiresWebView: false,
            functionName: "loadPage",
            cacheDuration: 1800,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

async function loadPage(params) {
    var page = Math.max(parseInt((params || {}).page, 10) || 1, 1);
    var url = page === 1 ? "https://jable.tv/latest-updates/" : "https://jable.tv/latest-updates/page/" + page + "/";
    return [{
        id: url,
        type: "url",
        title: "打开 Jable.tv 最新更新",
        imgSrc: "https://jable.tv/favicon.ico",
        backdropPath: "https://jable.tv/favicon.ico",
        mediaType: "movie",
        link: url,
        description: "在内置 WebView 中打开 Jable.tv 最新更新"
    }];
}

async function loadDetail(link) {
    return {
        id: link,
        type: "url",
        title: "打开 Jable.tv 详情页",
        mediaType: "movie",
        link: link,
        description: "在内置 WebView 中打开 Jable.tv 详情页"
    };
}
