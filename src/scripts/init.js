function loadModule(name) {
    let loadedModule = document.createElement("script")
    loadedModule.src = `src/modules/${name}.js`
    document.body.querySelector("#running-modules").appendChild(loadedModule)

    return loadedModule
}

function initializeScript(name) {
    let loadedScript = document.createElement("script")
    loadedScript.src = `src/scripts/${name}.js`
    document.body.appendChild(loadedScript)

    return loadedScript
}

function addText(file, type) {
    fetchPromise(file, type).then(text => {
        gameText[type][file.split(".")[0]] = text
    })
}

async function fetchPromise(file, type) {
    try {
        let fetchPromise
        let fetchResponse
        
        try {
            fetchPromise = await fetch(`lib/${type}/${file}`)
            fetchResponse = await fetchPromise.json()
            console.log(`Added json file ${file} to text data.`)
            return fetchResponse
        }
        catch {
            fetchPromise = await fetch(`lib/${type}/${file}`)
            fetchResponse = await fetchPromise.text()
            console.log(`Added txt file ${file} to text data.`)
            return fetchResponse
        }
    }
    catch (error) {
        console.log(error)
    }
}

let gameText = {
    text: {},
    choices: {}
}

loadModule("files-to-load")
loadModule("choice-functions")

setTimeout(() => {
    for (let i = 0; i < textToLoad.length; i++) {
        addText(textToLoad[i], "text")
    }
    for (let i = 0; i < choicesToLoad.length; i++) {
        addText(choicesToLoad[i], "choices")
    }
}, 200)

setTimeout(() => {
    initializeScript("manage-text")
    initializeScript("main")
}, 400)
