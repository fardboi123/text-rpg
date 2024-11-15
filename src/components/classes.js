class Game {
    constructor() {
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