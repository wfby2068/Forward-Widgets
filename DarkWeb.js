var WidgetMetadata = {
    id: "ti.bemarkt.awjq.v100",
    title: "暗网禁区",
    description: "暗网禁区 (AWJQ) 偷拍破解·明星黑料·乱伦揭秘·极速直连播放",
    author: "婉儿",
    site: "https://awjq.cc",
    version: "1.2.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        // --- 一级主栏目（对齐 App 顶部滑动导航与底栏核心） ---
        {
            title: "🔥 热门精选",
            description: "App 顶部【热门】主频道",
            requiresWebView: false,
            functionName: "loadTopic54",
            cacheDuration: 3600,
            params: [
                { name: "sort", title: "排序筛选", type: "enumeration", description: "排序方式", value: "hot", enumOptions: [
                    { title: "热度最高", value: "hot" },
                    { title: "最近更新", value: "new" },
                    { title: "观看最多", value: "video" },
                    { title: "畅销排行", value: "choice" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "👁️ 偷拍摄像破解",
            description: "App 底部【破解】/ 偷窥偷拍专区",
            requiresWebView: false,
            functionName: "loadTopic49",
            cacheDuration: 3600,
            params: [
                { name: "sort", title: "排序筛选", type: "enumeration", description: "排序方式", value: "video", enumOptions: [
                    { title: "视频专区", value: "video" },
                    { title: "热度最高", value: "hot" },
                    { title: "最近更新", value: "new" },
                    { title: "精选推荐", value: "choice" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🔞 伦理换妻",
            description: "App 顶部【伦理换妻】分类",
            requiresWebView: false,
            functionName: "loadTopic57",
            cacheDuration: 3600,
            params: [
                { name: "sort", title: "排序筛选", type: "enumeration", description: "排序方式", value: "video", enumOptions: [
                    { title: "视频专区", value: "video" },
                    { title: "热度最高", value: "hot" },
                    { title: "最近更新", value: "new" },
                    { title: "精选推荐", value: "choice" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🩸 重口猎奇",
            description: "App 顶部【重口猎奇】分类",
            requiresWebView: false,
            functionName: "loadHeavyTag",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🍭 动漫萝莉",
            description: "App 顶部【动漫萝莉】分类",
            requiresWebView: false,
            functionName: "loadAnimeTag",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🌟 明星大咖黑料",
            description: "实时流出明星大咖黑料内幕",
            requiresWebView: false,
            functionName: "loadTopic52",
            cacheDuration: 3600,
            params: [
                { name: "sort", title: "排序筛选", type: "enumeration", description: "排序方式", value: "video", enumOptions: [
                    { title: "视频专区", value: "video" },
                    { title: "热度最高", value: "hot" },
                    { title: "最近更新", value: "new" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🌸 破处回忆",
            description: "曾被你破处的女孩初体验回忆",
            requiresWebView: false,
            functionName: "loadTopic48",
            cacheDuration: 3600,
            params: [
                { name: "sort", title: "排序筛选", type: "enumeration", description: "排序方式", value: "video", enumOptions: [
                    { title: "视频专区", value: "video" },
                    { title: "热度最高", value: "hot" },
                    { title: "最近更新", value: "new" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },

        // --- 二级精选频道网格（对齐 App 4列宫格标签） ---
        {
            title: "🏷️ 标签分类大全",
            description: "App 4列次级分类网格（迷奸、乱伦、学妹、探花、偷拍、SM等）",
            requiresWebView: false,
            functionName: "loadGridTag",
            cacheDuration: 3600,
            params: [
                { name: "tag", title: "标签分类", type: "enumeration", description: "选择分类标签", value: "迷药迷奸", enumOptions: [
                    { title: "迷药迷奸", value: "迷药迷奸" },
                    { title: "父女乱伦", value: "女儿" },
                    { title: "萝莉少女", value: "萝莉少女" },
                    { title: "AI短剧", value: "AI短剧" },
                    { title: "探花精选", value: "探花" },
                    { title: "清纯学妹", value: "清纯学妹" },
                    { title: "黑人性奴", value: "黑人性奴" },
                    { title: "熟女少妇", value: "熟女少妇" },
                    { title: "母子通奸", value: "母子通奸" },
                    { title: "出轨偷情", value: "出轨偷情" },
                    { title: "人兽猎奇", value: "人兽" },
                    { title: "巨乳肥臀", value: "巨乳肥臀" },
                    { title: "黑料吃瓜", value: "黑料吃瓜" },
                    { title: "AI换脸", value: "AI换脸" },
                    { title: "自慰高潮", value: "自慰高潮" },
                    { title: "按摩会所", value: "按摩会所" },
                    { title: "偷窥偷拍", value: "偷窥偷拍" },
                    { title: "SM调教", value: "SM调教" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },

        // --- 特色爆料专区 ---
        {
            title: "🚨 园区与缅北揭秘",
            description: "金三角、电诈园区与缅北残酷揭秘实录",
            requiresWebView: false,
            functionName: "loadTopic92",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },

        // --- 全站搜索 ---
        {
            title: "🔍 全站搜索",
            description: "全站视频关键字搜索",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 0,
            params: [
                { name: "keyword", title: "关键字", type: "input", description: "搜索关键字", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

const API_BASE = "https://antigravity.6106730.xyz/api";

function formatDuration(sec) {
    if (!sec || isNaN(sec)) return "";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

async function fetchTopicVideos(topicId, page, sort = "video") {
    const p = Math.max(parseInt(page, 10) || 1, 1);
    const s = sort || "video";
    const url = `${API_BASE}/awjq_list?topic_id=${topicId}&cate=${encodeURIComponent(s)}&page=${p}&limit=20`;
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const list = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        if (!Array.isArray(list)) return [];

        return list.map(item => {
            const cover = item.cover || "";
            const vUrlParam = item.videoUrl ? `&video_url=${encodeURIComponent(item.videoUrl)}` : '';
            const fullLink = `${API_BASE}/awjq_detail?id=${item.id}${vUrlParam}`;
            return {
                id: fullLink,
                type: "url",
                title: item.title,
                imgSrc: cover,
                posterPath: cover,
                backdropPath: cover,
                coverUrl: cover,
                mediaType: "movie",
                duration: item.duration || 0,
                durationText: formatDuration(item.duration),
                releaseDate: item.created_at || "",
                link: fullLink,
                description: item.content || ("暗网禁区 · " + item.title),
                playerType: "app"
            };
        });
    } catch (e) {
        console.error("fetchTopicVideos error:", e);
        return [];
    }
}

async function fetchSearchVideos(word, page) {
    const keyword = (word || "").trim();
    const p = Math.max(parseInt(page, 10) || 1, 1);
    if (!keyword) return [];

    const url = `${API_BASE}/awjq_search?word=${encodeURIComponent(keyword)}&page=${p}&limit=20`;
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const list = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        if (!Array.isArray(list)) return [];

        return list.map(item => {
            const cover = item.cover || "";
            const vUrlParam = item.videoUrl ? `&video_url=${encodeURIComponent(item.videoUrl)}` : '';
            const fullLink = `${API_BASE}/awjq_detail?id=${item.id}${vUrlParam}`;
            return {
                id: fullLink,
                type: "url",
                title: item.title,
                imgSrc: cover,
                posterPath: cover,
                backdropPath: cover,
                coverUrl: cover,
                mediaType: "movie",
                duration: item.duration || 0,
                durationText: formatDuration(item.duration),
                releaseDate: "",
                link: fullLink,
                description: item.content || ("暗网禁区 · " + item.title),
                playerType: "app"
            };
        });
    } catch (e) {
        console.error("fetchSearchVideos error:", e);
        return [];
    }
}

async function loadTopic54(params) {
    return await fetchTopicVideos(54, params && params.page, params && params.sort);
}

async function loadTopic49(params) {
    return await fetchTopicVideos(49, params && params.page, params && params.sort);
}

async function loadTopic57(params) {
    return await fetchTopicVideos(57, params && params.page, params && params.sort);
}

async function loadTopic52(params) {
    return await fetchTopicVideos(52, params && params.page, params && params.sort);
}

async function loadTopic48(params) {
    return await fetchTopicVideos(48, params && params.page, params && params.sort);
}

async function loadTopic92(params) {
    return await fetchTopicVideos(92, params && params.page, "video");
}

async function loadHeavyTag(params) {
    return await fetchSearchVideos("猎奇", params && params.page);
}

async function loadAnimeTag(params) {
    return await fetchSearchVideos("动漫", params && params.page);
}

async function loadGridTag(params) {
    const tag = (params && params.tag) || "迷药迷奸";
    return await fetchSearchVideos(tag, params && params.page);
}

async function searchVideos(params) {
    const keyword = (params && params.keyword) || "";
    return await fetchSearchVideos(keyword, params && params.page);
}

async function loadDetail(link) {
    const url = typeof link === "object" && link ? (link.link || link.id || link.url) : String(link || "");
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const detail = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        const videoUrl = detail.videoUrl;
        if (!videoUrl) {
            throw new Error("视频链接未就绪");
        }

        const cover = detail.cover || "";
        return {
            id: url,
            type: "detail",
            title: detail.title,
            description: detail.content || "",
            intro: detail.content || "",
            posterPath: cover,
            backdropPath: cover,
            imgSrc: cover,
            coverUrl: cover,
            videoUrl: videoUrl,
            mediaType: "movie",
            duration: detail.duration || 0,
            durationText: formatDuration(detail.duration),
            playerType: "app",
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            },
            link: url
        };
    } catch (e) {
        console.error("loadDetail error:", e);
        throw e;
    }
}
