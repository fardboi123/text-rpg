function selectRandomArrayValue(array) {
    let indexChosen = Math.round(Math.random() * (array.length - 1))
    
    if (array[indexChosen] == undefined) {
        console.warn(indexChosen + "isn't a valid index of the following array: " + array)
    } else {
        return array[indexChosen]
    }
}

function logText(text) {
    let newLog = document.createElement("h3")
    newLog.textContent = text
    
    document.body.appendChild(newLog)
}