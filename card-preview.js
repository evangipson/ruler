import {GenerateLordTitle} from "./card-data.js";

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
        rulerCardArt.innerText = this.art;
    }
}

// base for Lord, Regiment, and Resource cards
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
}
class RegimentCard extends BattleCard {
    constructor(title, type, description, art, range, power, defense) {
        super(title, type, description, art, range, power, defense);
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

document.addEventListener('DOMContentLoaded', function(){
    const createRulerButton = document.getElementById("CreateRulerButton");
    createRulerButton.addEventListener("click", function(){
        const lordCard = new LordCard();
        // draw the card to screen
        lordCard.drawCard();
    });
})