class Vector2 {
    constructor(x, y) {
        this.x = x || 0
        this.y = y || 0
    }

    equals(otherVector2) {
        return this.x == otherVector2.x && this.y == otherVector2.y
    }

    add(otherValue) {
        if (typeof(otherValue) != "object") {return}
        return new Vector2(this.x + otherValue.x, this.y + otherValue.y,)
    }

    multiply(otherValue) {
        return new Vector2(
            this.x * (typeof(otherValue) == "object" && otherValue.x || otherValue),
            this.y * (typeof(otherValue) == "object" && otherValue.y || otherValue),
        )
    }
}

class Game {
    constructor() {
        this.choicesMade = 0
        this._currentChoices = null
        this._state = "Default"
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
        this._coordinates = new Vector2()
        this.inventory = []
        this.stats = {
            "max-health": 100,
            "health": 100
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

class Area {
    constructor(name, position, space) {
        this.name = name
        this.position = position
        this.worldSpace = space
        this.subLocations = []
    }

    contains(coordinate) {
        let xSpaceTaken = {"min": this.position.x - this.worldSpace.x / 2, "max": this.position.x + this.worldSpace.x / 2}
        let ySpaceTaken = {"min": this.position.y - this.worldSpace.y / 2, "max": this.position.y + this.worldSpace.y / 2}

        let containsX = coordinate.x >= xSpaceTaken.min && coordinate.x <= xSpaceTaken.max
        let containsY = coordinate.y >= ySpaceTaken.min && coordinate.y <= ySpaceTaken.max

        return (containsX && containsY)
    }
}

class Subarea extends Area {
    constructor(name, position, space, parentlocation) {
        super(name, position, space)
        this.subLocations = undefined
        this.parentLocation = parentlocation

        if (this.parentLocation == undefined) {
            console.warn(`${this.name} has no parent location.`);
            
        }
    }
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