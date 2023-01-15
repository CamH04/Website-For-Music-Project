import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Discography");
    }

    async getHtml() {
        return `
        <head>
            <link rel="stylesheet" href="/static/css/discogstyle.css">

        </head>
        <body>
            <div class="bg">
                <h1>Discography</h1>
                <div class="container">
                    <div class="bio">
                        <p>Some The Music I've Made</p>
                    </div>
                    <h2>Albums</h2>
                    <div class="Album-Img">
                        <a href="https://fiddlesticks.bandcamp.com/album/withering-in-paradise" class="Art"> <img src="static/img/CoverImg/WIP.png" width="400" height="400"> </a>
                        <a href="https://fiddlesticks.bandcamp.com/album/shattered-head" class="Art"> <img src="static/img/CoverImg/SH.png" width="400" height="400"> </a>
                        <a href="https://fiddlesticks.bandcamp.com/album/a-fading-bonfire" class="Art"> <img src="static/img/CoverImg/AFB.png" width="400" height="400"> </a>

                    </div>
                    <h2>Ep's</h2>
                    <div class="Ep-Img">
                        <a href="https://fiddlesticks.bandcamp.com/album/broken-thing-in-love" class="Art"> <img src="static/img/CoverImg/Eps/BTIL.png" width="400" height="400"> </a>
                    </div>
                    <h2>Singles</h2>
                    <div class="Singles-Img">

                    </div>
                    <h2>Compilations</h2>
                    <div class="Comp-Img">
                        <a href="https://fiddlesticks.bandcamp.com/album/cinder-a-compilation" class="Art"> <img src="static/img/CoverImg/Comps/C.png" width="400" height="400"> </a>
                    </div>
                    <h2>Ost's</h2>
                    <div class="Ost-Img">

                    </div>
                    <h2>Mix's</h2>
                    <div class="Mix-Img">

                    </div>
                    
                    <h2>Thats Not All!</h2>
                    <p>Find All My Music (With Visuals): </p>
                    <a class="icon" href="https://www.youtube.com/channel/UCpSljEBbuIXJo6c1RZCAkbQ" class="Art"> <img src="static/img/yt.png" width="60" height="60"></a>

                </div>


            </div>
        </body>
        `;
    }
}