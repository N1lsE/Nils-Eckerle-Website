class BlogPost {
    constructor(_headline, _summery, _author, _date, _text, _img) {
        this.headline = _headline;
        this.summery = _summery;
        this.author = _author;
        this.date = _date;
        this.text = _text;
        this.img = _img;
    }

    get getHeadline() {
        return this.headline;
    }
    get getSummery() {
        return this.summery;
    }
    get getAuthor() {
        return this.author;
    }
    get getDate() {
        return this.date;
    }
    get getText() {
        return this.text;
    }
    get getImg() {
        return this.img;
    }
}

