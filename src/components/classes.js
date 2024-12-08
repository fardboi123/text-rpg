class Game {
    constructor() {
        this.choicesMade = 0
        this._currentChoices = null
        this.distanceTravelled = 0
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
        this.inventory = []
        this.stats = {
            "max-health": 100,
            "health": 100,
        }
    }

    get health() {
        return this.stats.health
    }

    set health(value) {
        this.stats.health = value
    }
}

class Item {
    constructor(name) {
        this.name = name
    }
}

class Weapon extends Item {

}