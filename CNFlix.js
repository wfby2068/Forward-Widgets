/**
 * Forward App Widget - 国内热门影视 (CNFlix)
 * 聚合国内热播国产剧、电影、港台剧、动漫与热门综艺
 * 纯原生直连、1080P/4K 高速秒播、免翻墙免挂梯
 */

var WidgetMetadata = {
    id: "com.waner.cnflix",
    title: "国内热门影视",
    description: "国内全网热门电视剧、院线电影、港台剧、日韩欧美剧、动漫与综艺直连秒播",
    author: "婉儿",
    site: "https://antigravity.6106730.xyz",
    version: "1.0.2",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        {
            title: "国产热播剧",
            description: "最新同步热播国产连续剧",
            requiresWebView: false,
            functionName: "loadGuoChanJu",
            cacheDuration: 300,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "院线高清电影",
            description: "院线大片、动作、喜剧、科幻与爱情电影",
            requiresWebView: false,
            functionName: "loadDianYing",
            cacheDuration: 300,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "港台海外剧集",
            description: "香港TVB、台湾剧、日剧、韩剧与欧美剧",
            requiresWebView: false,
            functionName: "loadHaiWaiJu",
            cacheDuration: 300,
            params: [
                {
                    name: "type_id",
                    title: "选择地区",
                    type: "enumeration",
                    description: "选择具体剧集分类",
                    value: "24",
                    enumOptions: [
                        { title: "香港剧", value: "24" },
                        { title: "台湾剧", value: "27" },
                        { title: "韩国剧", value: "25" },
                        { title: "欧美剧", value: "26" },
                        { title: "日本剧", value: "28" },
                        { title: "泰国剧", value: "30" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "热门动漫番剧",
            description: "国产国创、日漫新番与欧美动画",
            requiresWebView: false,
            functionName: "loadDongMan",
            cacheDuration: 300,
            params: [
                {
                    name: "type_id",
                    title: "动漫分类",
                    type: "enumeration",
                    description: "选择动漫类型",
                    value: "35",
                    enumOptions: [
                        { title: "国产动漫", value: "35" },
                        { title: "日本动漫", value: "37" },
                        { title: "欧美动漫", value: "36" },
                        { title: "动画电影", value: "22" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "热门综艺娱乐",
            description: "大陆热门真人秀、脱口秀与港台日韩综艺",
            requiresWebView: false,
            functionName: "loadZongYi",
            cacheDuration: 300,
            params: [
                {
                    name: "type_id",
                    title: "综艺分类",
                    type: "enumeration",
                    description: "选择综艺类型",
                    value: "31",
                    enumOptions: [
                        { title: "大陆综艺", value: "31" },
                        { title: "港台综艺", value: "32" },
                        { title: "日韩综艺", value: "33" },
                        { title: "欧美综艺", value: "34" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "全网搜索影视",
            description: "输入片名/剧名快速直达播放",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 0,
            params: [
                { name: "keyword", title: "剧名/片名", type: "input", description: "输入想看的影视剧名称", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

var API_BASE = "https://antigravity.6106730.xyz/api";

async function fetchFromApi(url) {
    try {
        var res = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        if (!res || !res.data) return [];
        var data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        return Array.isArray(data) ? data : [];
    } catch (e) {
        return [];
    }
}

async function loadGuoChanJu(params) {
    var p = params || {};
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    var url = API_BASE + "/cnflix_list?t=23&pg=" + page;
    return await fetchFromApi(url);
}

async function loadDianYing(params) {
    var p = params || {};
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    var url = API_BASE + "/cnflix_list?t=1&pg=" + page;
    return await fetchFromApi(url);
}

async function loadHaiWaiJu(params) {
    var p = params || {};
    var typeId = p.type_id || "24";
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    var url = API_BASE + "/cnflix_list?t=" + typeId + "&pg=" + page;
    return await fetchFromApi(url);
}

async function loadDongMan(params) {
    var p = params || {};
    var typeId = p.type_id || "35";
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    var url = API_BASE + "/cnflix_list?t=" + typeId + "&pg=" + page;
    return await fetchFromApi(url);
}

async function loadZongYi(params) {
    var p = params || {};
    var typeId = p.type_id || "31";
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    var url = API_BASE + "/cnflix_list?t=" + typeId + "&pg=" + page;
    return await fetchFromApi(url);
}

async function searchVideos(params) {
    var p = params || {};
    var q = String(p.keyword || "").trim();
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    if (!q) return await loadGuoChanJu(params);
    var url = API_BASE + "/cnflix_search?wd=" + encodeURIComponent(q) + "&pg=" + page;
    return await fetchFromApi(url);
}

async function loadDetail(link) {
    var url = typeof link === "object" && link ? (link.link || link.id || link.url) : String(link || "");
    if (!url) return null;
    try {
        var res = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        if (!res || !res.data) return null;
        var data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        return data;
    } catch (e) {
        return null;
    }
}
