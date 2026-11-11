export default class DarenComic extends ComicSource {
    name = "大人漫画"
    key = "daren_comic"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://drmh3.com"

    exploreCategories = {
        "最近更新": "/latest-comics/page/{{page}}",
        "推荐漫画": "/latest-comics/recommend/page/{{page}}",
        "日榜": "/desirable-comics/daily/page/{{page}}",
        "总榜": "/desirable-comics/all/page/{{page}}"
    }

    fullUrl(url) {
        if (!url) return "";
        if (url.startsWith("http")) return url;
        if (url.startsWith("//")) return "https:" + url;
        return this.url + (url.startsWith("/") ? "" : "/") + url;
    }

    // 核心搜索逻辑
    async search(keyword, page) {
        let url = `${this.url}/cata.php?key=${encodeURIComponent(keyword)}`;
        let res = await Network.get(url, { "Referer": this.url });
        return this.parseList(res.body);
    }

    // 发现页逻辑
    async explore(category, page) {
        let path = this.exploreCategories[category];
        let url = this.fullUrl(path.replace("{{page}}", page));
        if (page === 1) url = url.replace("/page/1", "");
        let res = await Network.get(url, { "Referer": this.url });
        return this.parseList(res.body);
    }

    // 解析列表
    parseList(html) {
        let doc = new HtmlDocument(html);
        let items = doc.querySelectorAll(".hl-list-item, .comic-item, .book-item");
        let comics = [];
        for (let item of items) {
            let a = item.querySelector("a");
            if (!a) continue;
            let href = a.attributes["href"];
            let img = item.querySelector("img");
            comics.push({
                id: this.fullUrl(href),
                title: a.attributes["title"] || a.textContent.trim(),
                cover: this.fullUrl(img ? (img.attributes["data-original"] || img.attributes["src"]) : ""),
                subTitle: "",
                description: ""
            });
        }
        return { comics: comics, maxPage: 999 };
    }

    // 详情页
    async loadComic(comic) {
        let res = await Network.get(comic.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        comic.description = doc.querySelector("meta[property='og:description']")?.attributes["content"] || "";
        return comic;
    }

    // 章节列表
    async loadEpisodes(comic) {
        let res = await Network.get(comic.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        let links = doc.querySelectorAll(".hl-plays-list a, #playlist a");
        let episodes = [];
        for (let a of links) {
            episodes.push({
                id: this.fullUrl(a.attributes["href"]),
                title: a.attributes["title"] || a.textContent.trim()
            });
        }
        return episodes;
    }

    // 图片加载
    async loadImages(episode) {
        let res = await Network.get(episode.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        let imgs = doc.querySelectorAll("img");
        let images = [];
        for (let img of imgs) {
            let src = img.attributes["data-original"] || img.attributes["data-src"] || img.attributes["src"];
            if (src && !src.includes("logo")) {
                images.push(this.fullUrl(src));
            }
        }
        // Venera的图片配置需要走特定格式
        return {
            urls: images,
            headers: { "Referer": this.url + "/" }
        };
    }
}
