import {GenerateLordTitle, GenerateRegimentTitle, randomItem} from "./card-data.js";

// #region Utility functions
function drawImageToCanvas(imageSrc, canvas) {
    const canvasContext = canvas.getContext('2d');
    let image = new Image();
    image.addEventListener("load", function(){
        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
    }, false);
    // set image source after setting the event listener
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
    image.src = imageSrc;
}
function clearCanvas(canvas) {
    const canvasContext = canvas.getContext('2d');
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}
// #endregion Utility functions

// #region Class definitions
class RulerCard {
    constructor(title, type, description, art) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.art = art;
    }
    getRandomRange(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
    drawCard() {
        const rulerCardTitle = document.getElementById("RulerCardTitle");
        const rulerCardType = document.getElementById("RulerCardType");
        const rulerCardDescription = document.getElementById("RulerCardDescription");
        const rulerCardArt = document.getElementById("RulerCardArt");
        rulerCardTitle.innerText = this.title;
        rulerCardType.innerText = this.type;
        rulerCardDescription.innerText = this.description;
        //rulerCardArt.innerText = this.art;
    }
    // mostly responsible for clearing out the old art
    clearCardArt() {
        const canvases = [
            document.getElementById("RulerCardArtCanvasBackground"),
            document.getElementById("RulerCardArtCanvasFace"),
            document.getElementById("RulerCardArtCanvasFeatures")
        ];
        for(let i = 0; i < canvases.length; i++) {
            clearCanvas(canvases[i]);
        }
    }
}
// BattleCard is the base for Lord, Regiment, and Resource cards
class BattleCard extends RulerCard {
    constructor(title, type, description, art, range, power, defense) {
        super(title, type, description, art);
        if(!range) {
            range = this.getRandomRange(1, 5);
        }
        if(!power) {
            power = this.getRandomRange(1, 5);
        }
        if(!defense) {
            defense = this.getRandomRange(1, 5);
        }
        this.range = range;
        this.power = power;
        this.defense = defense;
    }
    drawCard() {
        super.drawCard();
        const rulerCardFirstRating = document.getElementById("RulerCardFirstRating");
        const rulerCardSecondRating = document.getElementById("RulerCardSecondRating");
        const rulerCardThirdRating = document.getElementById("RulerCardThirdRating");
        rulerCardFirstRating.innerText = this.range;
        rulerCardSecondRating.innerText = this.power;
        rulerCardThirdRating.innerText = this.defense;
    }
}
class LordCard extends BattleCard {
    constructor(title, type, description, art, range, power, defense) {
        super(title, type, description, art, range, power, defense);
        if(!title) {
            this.title = GenerateLordTitle();
        }
        if(!type) {
            this.type = "Lord Card";
        }
        if(!description) {
            this.description = `${this.title} is a Lord.\n${this.title} needs equipment to attack.`;
        }
        if(!art) {
            this.art = "Imagine some cool Lordly art here";
        }
    }
    generateArt() {
        // clear out previous art
        super.clearCardArt();
        // all the art pieces we have for lords
        const lordNoses = [
            "./art/lord/lord-nose-01.png",
            "./art/lord/lord-nose-02.png",
            "./art/lord/lord-nose-03.png",
            "./art/lord/lord-nose-04.png",
        ];
        const lordMouths = [
            "./art/lord/lord-mouth-01.png",
            "./art/lord/lord-mouth-02.png",
            "./art/lord/lord-mouth-03.png",
        ];
        const lordHairs = [
            "./art/lord/lord-hair-01.png",
            "./art/lord/lord-hair-02.png",
            "./art/lord/lord-hair-03.png",
            "./art/lord/lord-hair-04.png",
        ];
        const lordFaces = [
            "./art/lord/lord-face-01.png",
            "./art/lord/lord-face-02.png",
            "./art/lord/lord-face-03.png",
            "./art/lord/lord-face-04.png",
        ];
        const lordEyes = [
            "./art/lord/lord-eyes-01.png",
            "./art/lord/lord-eyes-02.png",
            "./art/lord/lord-eyes-03.png",
            "./art/lord/lord-eyes-04.png",
        ];
        const lordCoats = [
            "./art/lord/lord-coat-01.png",
            "./art/lord/lord-coat-02.png",
            "./art/lord/lord-coat-03.png",
            "./art/lord/lord-coat-04.png",
        ];
        // assemble the lord from pieces
        const lordArtBackground = randomItem(lordCoats);
        const lordArtFace = randomItem(lordFaces);
        const lordFeatures = [
            randomItem(lordHairs),
            randomItem(lordNoses),
            randomItem(lordMouths),
            randomItem(lordEyes),
        ];
        // grab the canvasi
        const rulerCanvasBackground = document.getElementById("RulerCardArtCanvasBackground");
        const rulerCanvasFace = document.getElementById("RulerCardArtCanvasFace");
        const rulerCanvasFeatures = document.getElementById("RulerCardArtCanvasFeatures");
        // fill up the background one first
        drawImageToCanvas(lordArtBackground, rulerCanvasBackground);
        // now the face
        drawImageToCanvas(lordArtFace, rulerCanvasFace);
        // now the features
        for(let i = 0; i < lordFeatures.length; i++) {
            drawImageToCanvas(lordFeatures[i], rulerCanvasFeatures);
        }
    }
}
class RegimentCard extends BattleCard {
    constructor(title, type, description, art, range, power, defense) {
        super(title, type, description, art, range, power, defense);
        if(!title) {
            this.title = GenerateRegimentTitle();
        }
        if(!type) {
            this.type = Math.random() > 0.5 ? "Melee Regiment Card" : "Ranged Regiment Card";
        }
        if(!description) {
            this.description = `${this.title} is a Lord.\n${this.title} needs equipment to attack.`;
        }
        if(!art) {
            this.art = "Imagine some cool Lordly art here";
        }
    }
}
class ResourceCard extends BattleCard {
    constructor(title, type, description, art, range, power, defense) {
        super(title, type, description, art, range, power, defense);
    }
}

class PolicyCard extends RulerCard {
    constructor(title, type, description, art, impact, denial) {
        super(title, type, description, art);
        this.impact = impact;
        this.denial = denial;
    }
}
class PropertyCard extends RulerCard {
    constructor(title, type, description, size, wealth, tax) {
        super(title, type, description, art);
        this.size = size;
        this.wealth = wealth;
        this.tax = tax;
    }
}
// #endregion Class definitions

document.addEventListener('DOMContentLoaded', function(){
    const createRulerButton = document.getElementById("CreateRulerButton");
    createRulerButton.addEventListener("click", function(){
        const lordCard = new LordCard();
        // draw the card to screen
        lordCard.drawCard();
        // then generate the art
        lordCard.generateArt();
    });
})