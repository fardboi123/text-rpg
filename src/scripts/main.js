let game = new Game()
let input = document.querySelector("input")
let question = null

logText(text["start-game"])
question = logText(text["choice-intro"].first)
listChoices(choices.default)

input.addEventListener("keyup", (keyCode) => {
    if (!game.currentChoices || keyCode.key != "Enter" || !parseFloat(input.value)) {
        return
    }

    let indexChosen = parseFloat(input.value)
    let choiceChosen = game.currentChoices[indexChosen - 1]

    if (choiceChosen) {
        input.value = ""
        game.currentChoices = null
        question.remove()
        
        choiceChosen.Function()
        question = logText(text["choice-intro"].default)
        listChoices(choices.default)
    }
})

