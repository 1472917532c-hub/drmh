class DarenComic extends ComicSource {
    // 1. 源的基本信息
    name = "大人漫画";
    key = "daren_comic";
    version = "1.0.0";
    minAppVersion = "1.0.0";
    url = "https://drmh3.com";

    // 2. 发现页面的分类（对应之前代码的 getfinds）
    exploreCategories = {
        "最近更新": "/latest-comics/page/{{page}}",
        "新书上架": "/latest-comics/latest-comics/page/{{page}}",
        "推荐漫画": "/latest-comics/recommend/page/{{page}}",
        "日榜": "/desirable-comics/daily/page/{{page}}",
        "周榜": "/desirable-comics/weekly/page/{{page}}",
        "月榜": "/desirable-comics/monthly/page/{{page}}",
        "总榜": "/desirable-comics/all/page/{{page}}",
        "韩漫精品": "/comics-catalog/韩漫/ob/hits/st/all/page/{{page}}",
        "日漫精选": "/comics-catalog/日漫/ob/hits/st/all/page/{{page}}",
        "3D漫画": "/comics-catalog/3D漫画/ob/hits/st/all/page/{{page}}",
        "真人类": "/comics-catalog/真人/ob/hits/st/all/page/{{page}}",
        "完结专区": "/comics-catalog/all/ob/hits/st/completed/page/{{page}}"
    };

    // 辅助方法：拼接完整链接
    fullUrl(url) {
        if (!url) return "";
        if (url.startsWith("http")) return url;
        if (url.startsWith("//")) return "https:" + url;
        return this.url + (url.startsWith("/") ? "" : "/") + url;
    }

    // 3. 搜索功能
    async search(keyword, page) {
        let url = `${this.url}/cata.php?key=${encodeURIComponent(keyword)}`;
        if (page > 1) url = `${this.url}/comics-searching/${encodeURIComponent(keyword)}/page/${page}`;
        
        let res = await Network.get(url, { "Referer": this.url });
        if (res.status !== 200) return { comics: [], maxPage: 1 };
        return this.parseComicList(res.body);
    }

    // 4. 发现页面的内容加载
    async explore(category, page) {
        let path = this.exploreCategories[category];
        if (!path) return { comics: [], maxPage: 1 };
        
        let url = this.fullUrl(path.replace("{{page}}", page));
        // 如果是第一页，并且URL里有 /page/1，尝试去掉它（针对部分网站规则）
        if (page === 1) url = url.replace("/page/1", "");

        let res = await Network.get(url, { "Referer": this.url });
        if (res.status !== 200) return { comics: [], maxPage: 1 };
        return this.parseComicList(res.body);
    }

    // 辅助方法：解析漫画列表（搜索和发现共用）
    parseComicList(htmlString) {
        let doc = new HtmlDocument(htmlString);
        let items = doc.querySelectorAll(".hl-list-item, .comic-item, .mh-item, .book-item, li.item");
        let comics = [];
        
        for (let item of items) {
            let a = item.querySelector(".hl-item-thumb, .comic-cover, .mh-thumb, a[href*='/comics-reading/'], a");
            if (!a) continue;
            let href = a.attributes["href"];
            let name = a.attributes["title"] || (item.querySelector(".title, h3 a") ? item.querySelector(".title, h3 a").textContent.trim() : "");
            if (!href || !name) continue;
            
            let cover = "";
            let img = item.querySelector("img, .hl-item-thumb");
            if (img) cover = img.attributes["data-original"] || img.attributes["data-src"] || img.attributes["src"] || "";

            comics.push({
                id: this.fullUrl(href),
                title: name,
                cover: this.fullUrl(cover),
                subTitle: item.querySelector(".author, .hl-item-author") ? item.querySelector(".author, .hl-item-author").textContent.trim() : "",
                description: ""
            });
        }
        // Venera 默认没有总页数，这里简单处理，只要返回了数据就允许加载下一页
        return { comics: comics, maxPage: comics.length > 0 ? 999 : 1 };
    }

    // 5. 漫画详情页加载
    async loadComic(comic) {
        let res = await Network.get(comic.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        
        let desc = doc.querySelector("meta[property='og:description']")?.attributes["content"] || "";
        let author = doc.querySelector("a[href*='/author/']")?.textContent.trim() || "";
        
        comic.description = desc;
        comic.author = author;
        comic.tags = [];
        
        let tags = doc.querySelectorAll(".detail-tags-item, .tags-item");
        for (let t of tags) comic.tags.push(t.textContent.trim());

        return comic;
    }

    // 6. 获取章节列表
    async loadEpisodes(comic) {
        let res = await Network.get(comic.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        
        let links = doc.querySelectorAll("#hl-plays-list li a, .hl-plays-list li a, .hl-plays-list a, #playlist a");
        if (links.length === 0) {
            // 备用规则
            let idMatch = comic.id.match(/\/comics-reading\/(\d+)/);
            if (idMatch) links = doc.querySelectorAll(`a[href*='/comics-reading/${idMatch[1]}/']`);
        }

        let episodes = [];
        for (let a of links) {
            let href = a.attributes["href"];
            let title = a.attributes["title"] || a.textContent.trim();
            if (!href || href.includes("javascript")) continue;
            episodes.push({
                id: this.fullUrl(href),
                title: title
            });
        }
        return episodes;
    }

    // 7. 获取章节内的图片 (解决防盗链问题)
    async loadImages(episode) {
        let res = await Network.get(episode.id, { "Referer": this.url });
        let doc = new HtmlDocument(res.body);
        let imgs = doc.querySelectorAll("img[data-original], img[data-src], img[src]");
        
        let images = [];
        for (let img of imgs) {
            let src = img.attributes["data-original"] || img.attributes["data-src"] || img.attributes["src"];
            if (!src || src.includes("loading") || src.includes("logo")) continue;
            images.push({
                url: this.fullUrl(src),
                headers: {
                    "Referer": this.url + "/"
                }
            });
        }
        return images;
    }
}
