var isCookieJar=true;
class FlutterJSBridge {
    constructor() { this.init(); }
    init() {
        if (window.flutter_inappwebview) {
            this.isReady = true;
            this.CookieJar();
        } else {
            window.addEventListener('flutterInAppWebViewPlatformReady', () => {
                this.isReady = true;
                this.CookieJar();
            });
        }
    }
    async CookieJar() { try { await window.flutter_inappwebview.callHandler('CookieJar', isCookieJar); } catch (error) {} }
    async getbuildNumber() { try { return await window.flutter_inappwebview.callHandler('buildNumber'); } catch (error) { return 0; } }
    async getversion() { try { return await window.flutter_inappwebview.callHandler('version'); } catch (error) { return "0.0.0"; } }
    async getsourceurl() { try { return await window.flutter_inappwebview.callHandler('getsourceurl'); } catch (error) { return ""; } }
    async getsearch() { try { return await window.flutter_inappwebview.callHandler('getsearch'); } catch (error) { return -1; } }
    async getWidth() { try { return await window.flutter_inappwebview.callHandler('getWidth'); } catch (error) { return 0; } }
    async getHeight() { try { return await window.flutter_inappwebview.callHandler('getHeight'); } catch (error) { return 0; } }
    async htmlToText(str) { try { return await window.flutter_inappwebview.callHandler('htmlToText', str); } catch (error) { return ""; } }
    async showvideoplay(url,title,key) { try { return await window.flutter_inappwebview.callHandler('showvideoplay', url, title, key); } catch (error) { return ""; } }
    async refreshContent(bookurl) { try { return await window.flutter_inappwebview.callHandler('refreshContent', bookurl); } catch (error) { return ""; } }
    async refreshExplore() { try { return await window.flutter_inappwebview.callHandler('refreshExplore'); } catch (error) { return ""; } }
    async showsvg() { try { return await window.flutter_inappwebview.callHandler('showsvg'); } catch (error) { return ""; } }
    async getsvg() { try { return await window.flutter_inappwebview.callHandler('getsvg'); } catch (error) { return []; } }
    async addsvg(svg) { try { return await window.flutter_inappwebview.callHandler('addsvg', svg); } catch (error) { return []; } }
    async setHtml(str) { try { return await window.flutter_inappwebview.callHandler('setHtml', str); } catch (error) { return ""; } }
    async toTraditional(str) { try { return await window.flutter_inappwebview.callHandler('toTraditional', str); } catch (error) { return ""; } }
    async toSimplified(str) { try { return await window.flutter_inappwebview.callHandler('toSimplified', str); } catch (error) { return ""; } }
    async voice() { try { return await window.flutter_inappwebview.callHandler('voice'); } catch (error) { return ""; } }
    async getDeviceid() { try { return await window.flutter_inappwebview.callHandler('id'); } catch (error) { return ""; } }
    async getDevice() { try { return await window.flutter_inappwebview.callHandler('device'); } catch (error) { return ""; } }
    async getLoginUser() { try { return await window.flutter_inappwebview.callHandler('getLoginUser'); } catch (error) { return ""; } }
    async log(str) { try { return await window.flutter_inappwebview.callHandler('log', str); } catch (error) { return false; } }
    async text(type,str) { try { return await window.flutter_inappwebview.callHandler('text', type, str); } catch (error) { return false; } }
    async showToast(str) { try { return await window.flutter_inappwebview.callHandler('showToast', str); } catch (error) { return false; } }
    async showLongToast(str) { try { return await window.flutter_inappwebview.callHandler('showLongToast', str); } catch (error) { return false; } }
    async getWebViewUA() { try { return await window.flutter_inappwebview.callHandler('getWebViewUA'); } catch (error) { return ""; } }
    async openurl(url) { try { return await window.flutter_inappwebview.callHandler('openurl', url, ""); } catch (error) { return false; } }
    async openurlwithMimeType(url,mimeType) { try { return await window.flutter_inappwebview.callHandler('openurl', url, mimeType); } catch (error) { return false; } }
    async webview(url,js,html,body,header) { try { return await window.flutter_inappwebview.callHandler('webview', url, js, html, body, header, "", ""); } catch (error) { return ""; } }
    async webViewGetOverrideUrl(url,js,html,body,header,overrideUrlRegex) { try { return await window.flutter_inappwebview.callHandler('webview', url, js, html, body, header, overrideUrlRegex, ""); } catch (error) { return ""; } }
    async webViewGetSource(url,js,html,body,header,urlregex) { try { return await window.flutter_inappwebview.callHandler('webview', url, js, html, body, header, "", urlregex); } catch (error) { return ""; } }
    async webViewGetAjax(url,html,body,header,ajaxregex) { try { return await window.flutter_inappwebview.callHandler('webviewajax', url, html, body, header, ajaxregex); } catch (error) { return ""; } }
    async startBrowser(url,title,header) { try { return await window.flutter_inappwebview.callHandler('startBrowser', url, title, header); } catch (error) { return ""; } }
    async startBrowserWithShouldOverrideUrlLoading(url,title,header) { try { return await window.flutter_inappwebview.callHandler('startBrowserWithShouldOverrideUrlLoading', url, title, header); } catch (error) { return ""; } }
    async startBrowserDp(url,title) { try { return await window.flutter_inappwebview.callHandler('startBrowserDp', url, title); } catch (error) { return ""; } }
    async startBrowserDpwithHtml(url,html,title) { try { return await window.flutter_inappwebview.callHandler('startBrowserDpwithHtml', url, html, title); } catch (error) { return ""; } }
    async back() { try { return await window.flutter_inappwebview.callHandler('back'); } catch (error) { return false; } }
    async utf8ToGbkUrlEncoded(str) { try { return await window.flutter_inappwebview.callHandler('utf8ToGbkUrlEncoded', str); } catch (error) { return ""; } }
    async getVerificationCode(str,header) { try { return await window.flutter_inappwebview.callHandler('getVerificationCode', str, header); } catch (error) { return ""; } }
    async addbook(bookUrl) { try { return await window.flutter_inappwebview.callHandler('addbook', bookUrl); } catch (error) { return ""; } }
    async searchbook(key) { try { return await window.flutter_inappwebview.callHandler('searchbook', key); } catch (error) { return ""; } }
    async getdurChapterIndex(bookUrl) { try { return await window.flutter_inappwebview.callHandler('getdurChapterIndex', bookUrl); } catch (error) { return 0; } }
    async getReadBook() { try { return await window.flutter_inappwebview.callHandler('getReadBook'); } catch (error) { return null; } }
    async base64encode(str) { try { return await window.flutter_inappwebview.callHandler('base64encode', str); } catch (error) { return ""; } }
    async base64decode(str) { try { return await window.flutter_inappwebview.callHandler('base64decode', str); } catch (error) { return ""; } }
}

class Http {
    constructor() {
        this.open = false;
        this.requestTimestamps = [];
        this.rateLimit = 5;
        this.rateLimitWindow = 1000;
    }
    async checkRateLimit() {
        if(!this.open) return;
        const now = Date.now();
        this.requestTimestamps = this.requestTimestamps.filter(timestamp => now - timestamp < this.rateLimitWindow);
        if (this.requestTimestamps.length >= this.rateLimit) {
            const oldestTimestamp = this.requestTimestamps[0];
            const waitTime = this.rateLimitWindow - (now - oldestTimestamp);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            return this.checkRateLimit();
        }
        this.requestTimestamps.push(now);
    }
    async Get(url,headers,followRedirects) { try { await this.checkRateLimit(); return await window.flutter_inappwebview.callHandler('http', "get", url, "", JSON.stringify(headers), followRedirects, ""); } catch (error) { return null; } }
    async Head(url,headers,followRedirects) { try { await this.checkRateLimit(); return await window.flutter_inappwebview.callHandler('http', "head", url, "", JSON.stringify(headers), followRedirects, ""); } catch (error) { return null; } }
    async Post(url,headers,body,contenttype,followRedirects) { try { await this.checkRateLimit(); return await window.flutter_inappwebview.callHandler('http', "post", url, body, JSON.stringify(headers), followRedirects, contenttype); } catch (error) { return null; } }
}

class Cache {
    constructor() {}
    async get(key) { try { return await window.flutter_inappwebview.callHandler('cache.get', key); } catch (error) { return null; } }
    async set(key,value) { try { return await window.flutter_inappwebview.callHandler('cache.set', key, value); } catch (error) { return null; } }
    async remove(key) { try { return await window.flutter_inappwebview.callHandler('cache.remove', key); } catch (error) { return null; } }
    async allget(key) { try { return await window.flutter_inappwebview.callHandler('cache.allget', key); } catch (error) { return null; } }
    async allset(key,value) { try { return await window.flutter_inappwebview.callHandler('cache.allset', key, value); } catch (error) { return null; } }
    async allremove(key) { try { return await window.flutter_inappwebview.callHandler('cache.allremove', key); } catch (error) { return null; } }
    async getLoginInfo(){ return await this.get("LoginInfo") }
    async putLoginInfo(info){ return await this.set("LoginInfo", info) }
    async getbookVariable(bookurl){ return await this.get(bookurl) }
    async setbookVariable(bookurl,value){ return await this.set(bookurl, value) }
}

class Cookie {
    constructor() {}
    async get(url) { try { return await window.flutter_inappwebview.callHandler('cookie.get', url); } catch (error) { return null; } }
    async remove(url) { try { return await window.flutter_inappwebview.callHandler('cookie.remove', url); } catch (error) { return null; } }
    async set(url,value) { try { return await window.flutter_inappwebview.callHandler('cookie.set', url, value); } catch (error) { return null; } }
    async setCookie(url,key,value) { try { return await window.flutter_inappwebview.callHandler('cookie.setcookie', url, key, value); } catch (error) { return null; } }
    async getCookie(url,value) { try { return await window.flutter_inappwebview.callHandler('cookie.getCookie', url, value); } catch (error) { return null; } }
}

function parseHTMLSafely(htmlStr) {
    try {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlStr;
        return tempDiv;
    } catch (e) {
        return document.createElement('div');
    }
}

function removeHTMLSafely(tempContainer) {
    try {
        tempContainer.innerHTML = '';
        if (tempContainer.parentNode) {
            tempContainer.parentNode.removeChild(tempContainer);
        }
    } catch (e) {}
}

function removeHTMLTags(htmlString) {
    let result = htmlString.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    result = result.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    result = result.replace(/<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>/gi, '');
    return result;
}

const flutterBridge = new FlutterJSBridge();
const cache = new Cache();
const http = new Http();
const cookie = new Cookie();
var baseurl = "https://drmh3.com";
var header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": baseurl
};

function fullUrl(url) {
    if (!url) return "";
    if (url.indexOf("http") === 0) return url;
    if (url.indexOf("//") === 0) return "https:" + url;
    return baseurl + (url.indexOf("/") === 0 ? "" : "/") + url;
}

function extractCover(el) {
    if (!el) return "";
    return el.getAttribute("data-original") || el.getAttribute("data-src") || el.getAttribute("src") || "";
}

function extractCoverFromItem(box) {
    var thumb = box.querySelector(".hl-item-thumb");
    var cover = thumb ? (thumb.getAttribute("data-original") || thumb.getAttribute("data-src") || "") : "";
    if (!cover) {
        var img = box.querySelector("img");
        cover = img ? (img.getAttribute("data-original") || img.getAttribute("data-src") || img.getAttribute("src") || "") : "";
    }
    return cover;
}

async function search(key,page,env) {
    if(page>1) return "[]";
    if (env === "searchone") {
        var searchType = await flutterBridge.getsearch();
        if (searchType !== -1 && searchType !== 2) return "[]";
    }
    try {
        var encoded = encodeURIComponent(key);
        var searchUrl = page > 1 ? baseurl + "/comics-searching/" + encoded + "/page/" + page : baseurl + "/cata.php?key=" + encoded;
        var get = await http.Get(searchUrl, header, true);
        if (!get || !get.data) return "[]";
        var books = [];
        var html = parseHTMLSafely(removeHTMLTags(get.data));
        var items = html.querySelectorAll(".hl-list-item, .comic-item, .mh-item, .book-item, li.item");
        for (var i = 0; i < items.length; i++) {
            var box = items[i];
            var thumb = box.querySelector(".hl-item-thumb, .comic-cover, .mh-thumb, .book-cover, a");
            var href = thumb ? thumb.getAttribute("href") : null;
            if (!href) { var a2 = box.querySelector("a[href*='/comics-reading/']"); href = a2 ? a2.getAttribute("href") : null; }
            if (!href) { var aFirst = box.querySelector("a"); href = aFirst ? aFirst.getAttribute("href") : null; }
            var name = thumb ? thumb.getAttribute("title") : "";
            if (!name) { var titleEl = box.querySelector(".hl-item-title, .comic-name, .mh-title, .book-name, .title, h3 a"); name = titleEl ? titleEl.textContent.trim() : ""; }
            if (!href || !name || href.indexOf("javascript") >= 0) continue;
            var bookUrl = fullUrl(href);
            var coverUrl = extractCoverFromItem(box);
            var authorEl = box.querySelector(".hl-item-author, .author, .mh-author, .comic-author");
            var author = authorEl ? authorEl.textContent.trim().replace(/作者[：:]/, "") : "";
            var kindEl = box.querySelector(".hl-item-type, .type, .tag, .genre, .status");
            var kind = kindEl ? kindEl.textContent.trim() : "";
            var lcEl = box.querySelector(".hl-lc-1, .update, .latest-chapter, .mh-update, .chapter, .hl-item-sub");
            var latest = lcEl ? lcEl.textContent.trim() : "";
            books.push({ bookUrl: bookUrl, name: name, author: author, kind: kind, coverUrl: coverUrl, intro: "", tocUrl: bookUrl, wordCount: "", type: 2, latestChapterTitle: latest });
        }
        removeHTMLSafely(html);
        return JSON.stringify(books);
    } catch (e) { return "[]"; }
}

async function filter() { return ""; }
async function findfilter(url) { return ""; }

async function info(bookurl) {
    try {
        var get = await http.Get(bookurl, header, true);
        if (!get || !get.data) return "{}";
        var html = parseHTMLSafely(removeHTMLTags(get.data));
        var nameEl = html.querySelector(".hl-dc-title, .book-title, h1, .comic-name, .detail-title");
        var name = nameEl ? nameEl.textContent.trim() : "";
        var authorEl = html.querySelector("a[href*='/comics-searching/'], a[href*='/author/'], a[href*='/search/']");
        var author = authorEl ? authorEl.textContent.trim() : "";
        var kindEls = html.querySelectorAll(".detail-tags-item, .tags-item");
        var kinds = [];
        for (var i=0;i<kindEls.length;i++){ var kk=kindEls[i].textContent.trim(); if(kk) kinds.push(kk); }
        var kind = kinds.join(",");
        var intro = "";
        var blurbs = html.querySelectorAll("li.blurb, .blurb");
        for (var i=0;i<blurbs.length;i++){
            var text = blurbs[i].textContent.trim();
            if (text.indexOf("简介") >= 0 || text.indexOf("介绍") >= 0) intro = text.replace(/简介[：:]?/, "").replace(/介绍[：:]?/, "").trim();
        }
        if (!intro) { var meta = html.querySelector("meta[property='og:description']"); intro = meta ? meta.getAttribute("content") || "" : ""; }
        var coverUrl = "";
        var coverSpan = html.querySelector(".hl-dc-pic .hl-item-thumb, .hl-dc-pic span");
        coverUrl = coverSpan ? (coverSpan.getAttribute("data-original") || coverSpan.getAttribute("data-src") || "") : "";
        if (!coverUrl) { var metaImg = html.querySelector("meta[property='og:image']"); coverUrl = metaImg ? metaImg.getAttribute("content") || "" : ""; }
        var statusEl = html.querySelector(".hl-pic-tag .state, .state, .status, .comic-status, .serial");
        var status = statusEl ? statusEl.textContent.trim() : "";
        removeHTMLSafely(html);
        return JSON.stringify({ bookUrl: bookurl, name: name, author: author, kind: kind, coverUrl: coverUrl, intro: intro, tocUrl: bookurl, wordCount: "", status: status, type: 2, latestChapterTitle: "" });
    } catch (e) { return "{}"; }
}

async function chapter(tocUrl,bookurl) {
    try {
        var get = await http.Get(tocUrl, header, true);
        if (!get || !get.data) return "[]";
        var idMatch = tocUrl.match(/\/comics-reading\/(\d+)/);
        var bookId = idMatch ? idMatch[1] : "";
        var chapters = [];
        var html = parseHTMLSafely(removeHTMLTags(get.data));
        var links = html.querySelectorAll("#hl-plays-list li a, .hl-plays-list li a");
        if (links.length === 0) links = html.querySelectorAll(".hl-plays-list a, #playlist a, .hl-list-wrap a");
        for (var i=0;i<links.length;i++){
            var a = links[i];
            var href = a.getAttribute("href");
            var name = a.getAttribute("title") || a.textContent.trim();
            if (!href || !name || href.indexOf("javascript") >= 0 || name.length === 0) continue;
            if (bookId && href.indexOf("/comics-reading/" + bookId + "/") < 0 && href.indexOf("/comics-reading/") >= 0) continue;
            chapters.push({ name: name, chapterId: fullUrl(href), index: chapters.length, isPay: false, isVip: false, isVolume: false, tag: "" });
        }
        if (chapters.length === 0 && bookId) {
            var all = html.querySelectorAll("a[href*='/comics-reading/" + bookId + "/']");
            for (var i=0;i<all.length;i++){
                var a3 = all[i];
                var href3 = a3.getAttribute("href");
                var name3 = a3.getAttribute("title") || a3.textContent.trim();
                if (!href3 || !name3 || href3.indexOf("javascript") >= 0 || name3.length === 0) continue;
                chapters.push({ name: name3, chapterId: fullUrl(href3), index: chapters.length, isPay: false, isVip: false, isVolume: false, tag: "" });
            }
        }
        removeHTMLSafely(html);
        return JSON.stringify(chapters);
    } catch (e) { return "[]"; }
}

async function content(url,bookurl) {
    try {
        var get = await http.Get(url, header, true);
        if (!get || !get.data) return await contentViaWebview(url);
        var images = [];
        var seen = {};
        var html = parseHTMLSafely(removeHTMLTags(get.data));
        var imgs = html.querySelectorAll("img[data-original], img[data-src], img[src]");
        for (var i=0;i<imgs.length;i++){
            var img = imgs[i];
            var src = img.getAttribute("data-original") || img.getAttribute("data-src") || img.getAttribute("src");
            if (!src) continue;
            var cls = img.getAttribute("class") || "";
            if (cls.indexOf("logo") >= 0 || cls.indexOf("nav") >= 0 || cls.indexOf("avatar") >= 0 || cls.indexOf("icon") >= 0) continue;
            if (src.indexOf("loading") >= 0 || src.indexOf("blank") >= 0 || src.indexOf("data:image") === 0) continue;
            var absSrc = fullUrl(src);
            if (seen[absSrc]) continue;
            seen[absSrc] = true;
            images.push('<img src="' + absSrc + ',' + JSON.stringify({ headers: { "Referer": baseurl + "/" } }) + '" />');
        }
        removeHTMLSafely(html);
        if (images.length === 0) return await contentViaWebview(url);
        return images.join("\n");
    } catch (e) { return ""; }
}

async function contentViaWebview(url) {
    try {
        var js = "(function(){var imgs=document.querySelectorAll('img[data-original],img[data-src],img');var r=[];for(var i=0;i<imgs.length;i++){var s=imgs[i].getAttribute('data-original')||imgs[i].getAttribute('data-src')||imgs[i].getAttribute('src');if(s&&s.indexOf('http')===0&&s.indexOf('loading')<0&&s.indexOf('blank')<0&&s.indexOf('logo')<0){r.push(s);}}return r.join('SEP');})()";
        var html = await flutterBridge.webview(url, js, "", "", JSON.stringify(header));
        if (!html) return "";
        if (html.indexOf("SEP") > 0) {
            var urls = html.split("SEP");
            var result = "";
            var seen = {};
            for (var i = 0; i < urls.length; i++) {
                var u = urls[i].trim();
                if (u && !seen[u]) {
                    seen[u] = true;
                    if (result) result += "\n";
                    result += '<img src="' + u + ',' + JSON.stringify({ headers: { "Referer": baseurl + "/" } }) + '" />';
                }
            }
            return result;
        }
        var temp = parseHTMLSafely(html);
        var result = "";
        var seen2 = {};
        var tempImgs = temp.querySelectorAll("img");
        for (var i=0;i<tempImgs.length;i++){
            var src2 = tempImgs[i].getAttribute("data-original") || tempImgs[i].getAttribute("data-src") || tempImgs[i].getAttribute("src");
            if (src2 && src2.indexOf("http") === 0 && !seen2[src2]) {
                seen2[src2] = true;
                if (result) result += "\n";
                result += '<img src="' + src2 + ',' + JSON.stringify({ headers: { "Referer": baseurl + "/" } }) + '" />';
            }
        }
        removeHTMLSafely(temp);
        return result;
    } catch (e) { return ""; }
}

async function getfinds() {
    var sort = [
        { title: "最近更新", url: "/latest-comics/page/{{page}}", type: 0 },
        { title: "新书上架", url: "/latest-comics/latest-comics/page/{{page}}", type: 0 },
        { title: "推荐漫画", url: "/latest-comics/recommend/page/{{page}}", type: 0 },
        { title: "日榜", url: "/desirable-comics/daily/page/{{page}}", type: 0 },
        { title: "周榜", url: "/desirable-comics/weekly/page/{{page}}", type: 0 },
        { title: "月榜", url: "/desirable-comics/monthly/page/{{page}}", type: 0 },
        { title: "总榜", url: "/desirable-comics/all/page/{{page}}", type: 0 },
        { title: "韩漫精品", url: "/comics-catalog/韩漫/ob/hits/st/all/page/{{page}}", type: 0 },
        { title: "日漫精选", url: "/comics-catalog/日漫/ob/hits/st/all/page/{{page}}", type: 0 },
        { title: "3D漫画", url: "/comics-catalog/3D漫画/ob/hits/st/all/page/{{page}}", type: 0 },
        { title: "真人类", url: "/comics-catalog/真人/ob/hits/st/all/page/{{page}}", type: 0 },
        { title: "完结专区", url: "/comics-catalog/all/ob/hits/st/completed/page/{{page}}", type: 0 }
    ];
    return JSON.stringify(sort);
}

async function find(url,page) {
    try {
        var findUrl = url.replace("{{page}}", page);
        if (page == 1) findUrl = findUrl.replace("/page/1", "");
        findUrl = fullUrl(findUrl);
        var get = await http.Get(findUrl, header, true);
        if (!get || !get.data) return "[]";
        var books = [];
        var html = parseHTMLSafely(removeHTMLTags(get.data));
        var items = html.querySelectorAll(".hl-list-item, .comic-item, .mh-item, .book-item, li.item");
        for (var i=0;i<items.length;i++){
            var box = items[i];
            var thumb = box.querySelector(".hl-item-thumb, .comic-cover, .mh-thumb, .book-cover, a");
            var href = thumb ? thumb.getAttribute("href") : null;
            if (!href) { var a2 = box.querySelector("a[href*='/comics-reading/']"); href = a2 ? a2.getAttribute("href") : null; }
            if (!href) { var aFirst = box.querySelector("a"); href = aFirst ? aFirst.getAttribute("href") : null; }
            var name = thumb ? thumb.getAttribute("title") : "";
            if (!name) { var titleEl = box.querySelector(".hl-item-title, .comic-name, .mh-title, .book-name, .title, h3 a"); name = titleEl ? titleEl.textContent.trim() : ""; }
            if (!href || !name || href.indexOf("javascript") >= 0) continue;
            var bookUrl = fullUrl(href);
            var coverUrl = extractCoverFromItem(box);
            var kindEl = box.querySelector(".hl-item-type, .type, .tag, .genre");
            var kind = kindEl ? kindEl.textContent.trim() : "";
            var lcEl = box.querySelector(".hl-lc-1, .update, .latest-chapter, .hl-item-sub");
            var latest = lcEl ? lcEl.textContent.trim() : "";
            books.push({ bookUrl: bookUrl, name: name, author: "", kind: kind, coverUrl: coverUrl, intro: "", tocUrl: bookUrl, wordCount: "", type: 2, latestChapterTitle: latest });
        }
        removeHTMLSafely(html);
        return JSON.stringify(books);
    } catch (e) { return "[]"; }
}

async function pay(bookurl,url) {}
async function getloginurl() { return baseurl; }
async function login() {}
async function imagedecrypt(url,image) { return image; }
async function shouldOverrideUrlLoading(url) { return true; }
async function gethelp() { return ""; }
async function callbackjs(event, book) { return false; }
