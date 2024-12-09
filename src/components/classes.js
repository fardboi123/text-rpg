class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Game {
    constructor() {
        this.choicesMade = 0
        this._currentChoices = null
    }

    get currentChoices() {
        return this._currentChoices
    }

    set currentChoices(value) {
        this._currentChoices = value
        
        if (value == null) {
            let currentChoicesDiv = document.querySelector("#choices")
            
            if (currentChoicesDiv) {
                currentChoicesDiv.remove()
            }
        } else {
            let choiceDiv = document.createElement("div")
            choiceDiv.id = "choices"

            document.body.appendChild(choiceDiv)

            for (let i = 0; i < value.length; i++) {
                logText(`${i + 1}. ${value[i].Text}`, choiceDiv)
            }
        }
    }
}

class Player {
    constructor() {
        this._coordinates = new Vector2(0, 0)
        this.inventory = []
        this.stats = {
            "max-health": 100,
            "health": 100,
        }
    }

    get coordinates() {
        return this._coordinates
    }

    set coordinates(value) {
        this._coordinates = value
    }
    
    get health() {
        return this.stats.health
    }

    set health(value) {
        this.stats.health = value
    }
}

class Location {
    constructor(coordinates, space) {
        this.coordinates = coordinates
        this.worldSpace = space
    }
}

class Sublocation extends Location {
    
}

class Item {
    constructor(name) {
        this.name = name
    }
}

class Weapon extends Item {
    
}

class Equipment extends Item {

}

class Consumable extends Item {

}

class Sword extends Weapon {

}