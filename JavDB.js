var WidgetMetadata = {
  id: "ti.bemarkt.javdb",
  title: "JavDB",
  description: "获取 JavDB 最新/热门影片推荐与番号检索 (婉儿定制版)",
  author: "婉儿 (Waner)",
  site: "https://javdb.com",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 300,
  modules: [
    {
      title: "今日新种",
      description: "浏览今日最新发布的影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/?v=new"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "有码热门",
      description: "浏览最新有码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/censored"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "无码专区",
      description: "浏览最新无码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/uncensored"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "西方AV",
      description: "浏览欧美/西方精品影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/western"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    }
  ]
};

const JAVDB_BASE_URL = "https://javdb.com";
const JAVDB_LOG_PREFIX = "ForwardWidget: JavDB -";

async function loadPage(params = {}) {
  const baseUrl = params.url || "https://javdb.com/";
  const page = parseInt(params.page, 10) || 1;
  let url = baseUrl;
  if (page > 1) {
    url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  }

  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cookie": "over18=1; locale=zh; theme=auto",
        "Referer": "https://javdb.com/"
      },
      allow_redirects: true
    });

    if (!response || !response.data) {
      return [];
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    // JavDB 标准电影卡片选择器: .movie-list .item
    $(".movie-list .item, .grid .item").each((index, el) => {
      const $el = $(el);
      const $link = $el.find("a.box").first();
      let link = $link.attr("href") || "";
      if (!link) return;

      if (!link.startsWith("http")) {
        link = `${JAVDB_BASE_URL}${link.startsWith("/") ? "" : "/"}${link}`;
      }

      // 提取封面图片
      const $img = $el.find(".cover img").first();
      let imgSrc = $img.attr("data-src") || $img.attr("src") || "";
      if (imgSrc.startsWith("//")) {
        imgSrc = `https:${imgSrc}`;
      }

      // 提取标题与番号
      const title = $el.find(".video-title").first().text().trim() || $link.attr("title") || "";
      const code = $el.find(".video-title strong").first().text().trim();

      // 提取发布日期 / 评分
      const dateText = $el.find(".meta").first().text().trim();
      const scoreText = $el.find(".score .value").first().text().trim();
      const tagText = $el.find(".tags").text().replace(/\s+/g, ' ').trim();

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title || code || "未知影片",
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        mediaType: "movie",
        link: link,
        releaseDate: dateText,
        durationText: dateText,
        description: [code ? `番号: ${code}` : "", dateText ? `日期: ${dateText}` : "", tagText ? `标签: ${tagText}` : ""].filter(Boolean).join(" | ")
      });
    });

    return videoItems;
  } catch (error) {
    console.error(`${JAVDB_LOG_PREFIX} 获取列表失败: ${error.message}`);
    return [];
  }
}

async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Cookie": "over18=1; locale=zh",
        "Referer": "https://javdb.com/"
      },
      allow_redirects: true
    });

    if (!response || !response.data) {
      return { id: link, type: "url", videoUrl: link, title: "查看详情", link: link };
    }

    const $ = Widget.html.load(response.data);
    const title = $("h2.title strong").first().text().trim() || $('meta[property="og:title"]').attr("content") || "JavDB 影片";
    let poster = $('meta[property="og:image"]').attr("content") || $(".video-cover").attr("src") || "";
    if (poster.startsWith("//")) poster = `https:${poster}`;

    // 预览视频
    let previewVideo = $("video source").attr("src") || $("video").attr("src") || "";

    // 提取时长信息
    let durationFormatted = "";
    $(".movie-panel-info .panel-block").each((_, block) => {
      const text = $(block).text();
      if (text.includes("時長:") || text.includes("时长:")) {
        durationFormatted = text.replace(/^[^:]+:/, "").trim();
      }
    });

    return {
      id: link,
      type: "url",
      videoUrl: previewVideo || link,
      title: title,
      imgSrc: poster,
      backdropPath: poster,
      mediaType: "movie",
      link: link,
      releaseDate: durationFormatted,
      durationText: durationFormatted,
      customHeaders: {
        "Referer": "https://javdb.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    };
  } catch (error) {
    return { id: link, type: "url", videoUrl: link, title: "查看详情", link: link };
  }
}
