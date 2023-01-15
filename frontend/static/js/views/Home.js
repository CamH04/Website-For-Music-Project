import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Fiddlesticks_");
    }

    async getHtml() {
        return `
        <head>
            <link rel="stylesheet" href="/static/css/homestyle.css">
        </head>
        
        <body> 
            <div class="bg">
                <h1>Fiddlesticks_ Music</h1>
                <div class="container">
                    <div class="bio">
                        <p>I piss musicly, trol</p>
                    </div>
                    <div class="ImgHyperlinks">
                        <p><a href="https://fiddlesticks.bandcamp.com/"> <img src="static/img/bc.png" width="40" height="40"> </a></p>
                        <p><a href="https://www.youtube.com/channel/UCpSljEBbuIXJo6c1RZCAkbQ"> <img src="static/img/yt.png" width="40" height="40"> </a></p>
                        <p><a href="https://soundcloud.com/fiddle-sticks-829654551"> <img src="static/img/sc.png" width="40" height="40"> </a></p>
                    </div>
                </div>
            </div>
        </body>
        `;
    }
}