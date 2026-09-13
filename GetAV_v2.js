/*
 * GetAV Forward widget
 *
 * The site currently returns Cloudflare 403 to server-side HTTP clients.
 * This widget therefore uses a two-stage strategy:
 * - parse public cards when Widget.http can reach the page;
 * - always keep a WebView-openable fallback so the module remains useful.
 *
 * No protected-stream or DRM bypass is attempted. Playback is delegated to
 * the site's own detail page when a direct media URL is not exposed.
 */

const SITE = "https://getav.net";
const HOME = SITE + "/zh";

var WidgetMetadata = {
  id: "forward.getav.zh",
  title: "GetAV",
  description: "GetAV 分类浏览与网页播放",
  author: "Kevin",
  site: "https://getav.net/zh",
  version: "2.1.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 300,
  modules: [
    moduleFor("最新更新", "浏览最新更新", "/zh/new"),
    moduleFor("热门排行", "浏览热门影片", "/zh/popular"),
    moduleFor("中文字幕", "浏览中文字幕影片", "/zh/subtitled"),
    moduleFor("无码专区", "浏览无码影片", "/zh/uncensored"),
    moduleFor("4K 高清", "浏览 4K 影片", "/zh/4k")
  ]
};

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": HOME
};

function moduleFor(title, description, path) {
  return {
    title: title,
    description: description,
    requiresWebView: true,
    functionName: "loadPage",
    cacheDuration: 900,
    params: [
      { name: "url", title: "列表地址", type: "constant", value: SITE + path },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  };
}

function absoluteUrl(value) {
  if (!value) return "";
  var s = String(value).trim();
  if (s.indexOf("data:") === 0) return "";
  if (s.indexOf("//") === 0) return "https:" + s;
  if (/^https?:\/\//i.test(s)) return s;
  return SITE + (s.charAt(0) === "/" ? "" : "/") + s;
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function isChallenge(html) {
  var s = String(html || "");
  return !s || s.length < 500 || /Just a moment|cf-mitigated|Performing security verification|Enable JavaScript and cookies/i.test(s);
}

function pagePath(params) {
  var path = params && params.url ? String(params.url) : SITE + "/zh/new";
  if (/^https?:\/\//i.test(path)) path = path.replace(SITE, "");
  var page = Math.max(parseInt(params && params.page, 10) || 1, 1);
  return SITE + path + (page > 1 ? (path.indexOf("?") >= 0 ? "&" : "?") + "page=" + page : "");
}

function webViewItem(url, title, description) {
  return {
    id: url,
    type: "webview",
    videoUrl: url,
    title: title || "打开 GetAV",
    link: url,
    mediaType: "movie",
    playerType: "system",
    description: description || "由 GetAV 网页播放器打开"
  };
}

function parseCard($, card, index) {
  var $card = $(card);
  var link = $card.attr("href") || $card.find("a[href]").first().attr("href") || "";
  link = absoluteUrl(link);
  if (!link || !isDetailLink(link)) return null;

  var $img = $card.find("img").first();
  var image = absoluteUrl(
    $img.attr("data-src") ||
    $img.attr("data-original") ||
    $img.attr("data-lazy-src") ||
    $img.attr("src") || ""
  );
  var title = cleanText(
    $card.attr("title") ||
    $card.find("h1,h2,h3,.title,.name,[class*='title'],[class*='name']").first().text() ||
    $img.attr("alt") ||
    $card.find("a").first().text()
  );
  var duration = cleanText($card.find(".duration,[class*='duration'],[class*='time']").first().text());
  if (!title) title = "GetAV 影片";

  return {
    id: index + "|" + link,
    type: "url",
    title: title,
    imgSrc: image,
    posterPath: image,
    backdropPath: image,
    mediaType: "movie",
    link: link,
    releaseDate: duration,
    durationText: duration,
    description: duration ? "时长: " + duration : "GetAV"
  };
}

function isDetailLink(url) {
  return /^https?:\/\/getav\.net\/(?:[a-z]{2}\/)?(?:videos|video|v)\//i.test(url);
}

function parseCards(html) {
  var $ = Widget.html.load(html);
  var result = [];
  var seen = {};
  var selectors = [
    "a[href*='/videos/']",
    "a[href*='/video/']",
    "a[href*='/v/']",
    "article",
    ".video-card",
    ".video-item",
    ".card"
  ];

  $(selectors.join(",")).each(function(index, element) {
    var item = parseCard($, element, index);
    if (!item || seen[item.link]) return;
    seen[item.link] = true;
    result.push(item);
  });
  return result;
}

function xmlText(block, tag) {
  var match = String(block || "").match(new RegExp("<(?:video:)?" + tag + ">([\\s\\S]*?)</(?:video:)??" + tag + ">", "i"));
  return match ? cleanText(match[1]).replace(/<!\[CDATA\[|\]\]>/g, "") : "";
}

function parseVideoSitemap(xml) {
  var result = [];
  var seen = {};
  var blocks = String(xml || "").match(/<url>[\s\S]*?<\/url>/gi) || [];
  blocks.forEach(function(block, index) {
    var link = xmlText(block, "loc");
    var title = xmlText(block, "title");
    var image = xmlText(block, "thumbnail_loc");
    var duration = xmlText(block, "duration");
    if (!link || !isDetailLink(link) || seen[link]) return;
    seen[link] = true;
    result.push({
      id: index + "|" + link,
      type: "url",
      title: title || "GetAV 影片",
      imgSrc: absoluteUrl(image),
      posterPath: absoluteUrl(image),
      backdropPath: absoluteUrl(image),
      mediaType: "movie",
      link: link,
      releaseDate: duration || "",
      durationText: duration || "",
      description: duration ? "时长: " + duration + " 秒" : "GetAV"
    });
  });
  return result;
}

async function loadPage(params) {
  params = params || {};
  var url = pagePath(params);
  var page = Math.max(parseInt(params.page, 10) || 1, 1);
  var sitemapUrl = SITE + "/zh-HK/video-sitemaps/v2/" + page;
  try {
    var sitemap = await Widget.http.get(sitemapUrl, { headers: HEADERS, allow_redirects: true });
    if (sitemap && sitemap.data) {
      var sitemapItems = parseVideoSitemap(sitemap.data);
      if (sitemapItems.length) return sitemapItems;
    }
  } catch (error) {
    // Sitemap is the low-friction fallback when page HTML is WAF-blocked.
  }
  try {
    var response = await Widget.http.get(url, { headers: HEADERS, allow_redirects: true });
    if (response && response.data && !isChallenge(response.data)) {
      var items = parseCards(response.data);
      if (items.length) return items;
    }
  } catch (error) {
    // Keep the WebView fallback below; server-side 403 is expected on this site.
  }
  return [webViewItem(url, "打开 GetAV 列表", "服务器抓取被站点防护拦截，已交给内置 WebView 打开")];
}

async function loadDetail(link) {
  var target = absoluteUrl(link);
  if (!target) return webViewItem(HOME, "打开 GetAV", "无效详情地址");

  try {
    var response = await Widget.http.get(target, { headers: Object.assign({}, HEADERS, { Referer: target }), allow_redirects: true });
    var html = response && response.data ? String(response.data) : "";
    if (!isChallenge(html)) {
      var $ = Widget.html.load(html);
      var title = cleanText($("meta[property='og:title']").attr("content") || $("h1").first().text() || $("title").text());
      var poster = absoluteUrl($("meta[property='og:image']").attr("content"));
      var direct = html.match(/["'](https?:\/\/[^"'\s]+\.m3u8(?:\?[^"'\s]*)?)["']/i);
      if (!direct) direct = html.match(/https?:\/\/[^"'\s]+\.m3u8(?:\?[^"'\s]*)?/i);
      if (direct && direct[1]) {
        return {
          id: target,
          type: "detail",
          title: title || "GetAV 影片",
          link: target,
          videoUrl: direct && direct[1] ? direct[1] : target,
          posterPath: poster,
          backdropPath: poster,
          mediaType: "movie",
          playerType: "ijk",
          customHeaders: { Referer: target, Origin: SITE, "User-Agent": HEADERS["User-Agent"] }
        };
      }
    }
  } catch (error) {
    // Fall through to the site's own player page.
  }

  return webViewItem(target, "打开 GetAV 播放页", "未暴露直连视频地址，由 GetAV 网页播放器负责播放");
}
