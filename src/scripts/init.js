let gameText = {}

function addText(filename) {
    fetchPromise(filename).then(text => {
        gameText[filename] = text
    })
}

async function fetchPromise(filename) {
    let fetchPromise = await fetch(`lib/text/${filename}.txt`)
    let fetchResponse = await fetchPromise.text()

    return fetchResponse
}

addText("start-game")

setTimeout(() => {
    let mainScript = document.createElement("script")
    mainScript.src = "src/scripts/main.js"
    document.body.appendChild(mainScript)
}, 250)
