function selectRandomArrayValue(array) {
    let indexChosen = Math.round(Math.random() * (array.length - 1))

    if (array[indexChosen] == undefined) {
        console.warn(indexChosen + "isn't a valid index of the following array: " + array)
    } else {
        return array[indexChosen]
    }
}

function logText(text, parent) {
    let newLog = document.createElement("p")
    
    switch (typeof(text)) {
        case "object":
            for (let i = 0; i < text.length; i++) {                
                newLog.textContent = newLog.textContent + (i > 0 && " " || "") + text[i]
            }
            break
        case "string":
            newLog.textContent = text
            break
        default:
            console.warn("Not a valid text format.")
    }

    if (parent) {
        parent.appendChild(newLog)
    } else {
        document.body.appendChild(newLog)
    }

    return newLog
}

function logQuestion(text, parent) {
    if (question) {
        question.remove()
    }
    question = logText(text, parent)
}


function listChoices(list) {
    game.currentChoices = list
}