var WidgetMetadata = {
    id: "ti.bemarkt.awjq.v100",
    title: "暗网禁区",
    description: "暗网禁区 (AWJQ) 偷拍破解·明星黑料·乱伦揭秘·极速直连播放",
    author: "婉儿",
    site: "https://awjq.cc",
    version: "1.4.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        // ==========================================
        // 🌟 圈选推荐核心独立专区
        // ==========================================
        {
            title: "母子通奸",
            description: "【精选】母子乱伦与家庭禁忌原创专区",
            requiresWebView: false,
            functionName: "loadTagMotherSon",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "清纯学妹",
            description: "【精选】清纯校花、学妹与女大调教精选",
            requiresWebView: false,
            functionName: "loadTagSchoolgirl",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "熟女少妇",
            description: "【精选】极品人妻、熟女风韵私拍大片",
            requiresWebView: false,
            functionName: "loadTagMature",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "出轨偷情",
            description: "【精选】真实出轨捉奸、偷情出轨实录",
            requiresWebView: false,
            functionName: "loadTagCheating",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "巨乳肥臀",
            description: "【精选】极品大胸爆乳、肥臀肉感视觉盛宴",
            requiresWebView: false,
            functionName: "loadTagBigBoobs",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "黑料吃瓜",
            description: "【精选】实时流出网红与明星黑料大爆料",
            requiresWebView: false,
            functionName: "loadTagMelon",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "自慰高潮",
            description: "【精选】高潮喷水、私密自慰真实自拍",
            requiresWebView: false,
            functionName: "loadTagMasturbation",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "偷窥偷拍",
            description: "【精选】摄像头破解、酒店厕所真实偷拍",
            requiresWebView: false,
            functionName: "loadTagSpy",
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
            title: "性瘾孕妇",
            description: "【精选】大肚孕妇特殊癖好与猛操内射",
            requiresWebView: false,
            functionName: "loadTagPregnant",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },

        // ==========================================
        // 📱 App 顶部滑动横向栏目
        // ==========================================
        {
            title: "热门推荐",
            description: "App 顶部【热门】主频道，支持 4 种排序",
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
            title: "最美制服",
            description: "App 顶部【最美制服】专区（空姐、护士、学生、OL）",
            requiresWebView: false,
            functionName: "loadTagUniform",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "网黄福利",
            description: "App 顶部【网黄】专区（推特网红、福利姬、私拍）",
            requiresWebView: false,
            functionName: "loadTagNetPorn",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "异域风情",
            description: "App 顶部【异域风情】专区（欧美、日韩、东南亚大洋马）",
            requiresWebView: false,
            functionName: "loadTagExotic",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "伦理换妻",
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

        // ==========================================
        // 🏷️ 精选分类标签库 (已剔除广告/特定项)
        // ==========================================
        {
            title: "分类标签库",
            description: "涵盖 App 热门分类标签，任意选择切换",
            requiresWebView: false,
            functionName: "loadGridTag",
            cacheDuration: 3600,
            params: [
                { name: "tag", title: "标签分类", type: "enumeration", description: "选择分类标签", value: "清纯学妹", enumOptions: [
                    { title: "清纯学妹", value: "清纯学妹" },
                    { title: "熟女少妇", value: "熟女少妇" },
                    { title: "母子通奸", value: "母子通奸" },
                    { title: "出轨偷情", value: "出轨偷情" },
                    { title: "巨乳肥臀", value: "巨乳肥臀" },
                    { title: "黑料吃瓜", value: "黑料吃瓜" },
                    { title: "自慰高潮", value: "自慰高潮" },
                    { title: "偷窥偷拍", value: "偷窥偷拍" },
                    { title: "性瘾孕妇", value: "孕妇" },
                    { title: "萝莉少女", value: "萝莉少女" },
                    { title: "AI短剧", value: "AI短剧" },
                    { title: "探花精选", value: "探花" },
                    { title: "黑人性奴", value: "黑人性奴" },
                    { title: "人兽猎奇", value: "人兽" },
                    { title: "AI换脸", value: "AI换脸" },
                    { title: "按摩会所", value: "按摩会所" },
                    { title: "肛交内射", value: "肛交内射" },
                    { title: "SM调教", value: "SM调教" }
                ]},
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },

        // ==========================================
        // 🔍 全网实时搜索
        // ==========================================
        {
            title: "全站搜索",
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

const AD_KEYWORDS = ["迷奸液", "喷雾型迷药", "美国进口迷奸香水", "迷药", "迷情水", "催情粉", "听话水", "乖乖水"];

function isAd(item) {
    const title = (item && item.title) || "";
    const content = (item && item.content) || "";
    return AD_KEYWORDS.some(k => title.includes(k) || content.includes(k));
}

async function fetchTopicVideos(topicId, page, sort) {
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

        return list.filter(item => !isAd(item)).map(item => {
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

        return list.filter(item => !isAd(item)).map(item => {
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

// ------------------------------------------
// 独立标签加载函数
// ------------------------------------------
async function loadTagMotherSon(params) {
    return await fetchSearchVideos("母子通奸", params && params.page);
}

async function loadTagSchoolgirl(params) {
    return await fetchSearchVideos("清纯学妹", params && params.page);
}

async function loadTagMature(params) {
    return await fetchSearchVideos("熟女少妇", params && params.page);
}

async function loadTagCheating(params) {
    return await fetchSearchVideos("出轨偷情", params && params.page);
}

async function loadTagBigBoobs(params) {
    return await fetchSearchVideos("巨乳肥臀", params && params.page);
}

async function loadTagMelon(params) {
    return await fetchSearchVideos("黑料吃瓜", params && params.page);
}

async function loadTagMasturbation(params) {
    return await fetchSearchVideos("自慰高潮", params && params.page);
}

async function loadTagSpy(params) {
    return await fetchTopicVideos(49, params && params.page, params && params.sort);
}

async function loadTagPregnant(params) {
    return await fetchSearchVideos("孕妇", params && params.page);
}

// ------------------------------------------
// 顶部分类与其他板块
// ------------------------------------------
async function loadTopic54(params) {
    return await fetchTopicVideos(54, params && params.page, params && params.sort);
}

async function loadTagUniform(params) {
    return await fetchSearchVideos("制服", params && params.page);
}

async function loadTagNetPorn(params) {
    return await fetchSearchVideos("网黄", params && params.page);
}

async function loadTagExotic(params) {
    return await fetchSearchVideos("异域风情", params && params.page);
}

async function loadTopic57(params) {
    return await fetchTopicVideos(57, params && params.page, params && params.sort);
}

async function loadGridTag(params) {
    const tag = (params && params.tag) || "清纯学妹";
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
