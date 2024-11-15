let game = new Game()
let input = document.querySelector("input")

logText(gameText.text["start-game"])
logText(gameText.text["choice-intro"].default)
listChoices(gameText.choices["default"])

input.addEventListener("keyup", (keyCode) => {
    if (!game.currentChoices || keyCode.key != "Enter" || !parseFloat(input.value)) {
        return
    }

    let indexChosen = parseFloat(input.value)
    let choiceChosen = game.currentChoices[indexChosen - 1]

    if (choiceChosen) {
        logText(`${choiceChosen.Type} has been chosen.`)
        choiceFunctions[choiceChosen.Type.toLowerCase()]()
        input.value = ""
        game.currentChoices = null
    }
})

