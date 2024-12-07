let game = new Game()
let input = document.querySelector("input")

logText(text["start-game"])
logText(text["choice-intro"].default)
listChoices(choices["default"])

input.addEventListener("keyup", (keyCode) => {
    if (!game.currentChoices || keyCode.key != "Enter" || !parseFloat(input.value)) {
        return
    }

    let indexChosen = parseFloat(input.value)
    let choiceChosen = game.currentChoices[indexChosen - 1]

    if (choiceChosen) {
        logText(`${choiceChosen.Text} has been chosen.`)
        choiceChosen.Function()
        input.value = ""
        game.currentChoices = null
    }
})

