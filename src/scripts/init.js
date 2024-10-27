let gameText = {}

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

function addText(file) {
    fetchPromise(file).then(text => {
        gameText[file.split(".")[0]] = text
    })
}

async function fetchPromise(file) {
    try {
        let fetchPromise
        let fetchResponse
        
        try {
            fetchPromise = await fetch(`lib/text/${file}`)
            fetchResponse = await fetchPromise.json()
            console.log(`Added json file ${file} to text data.`)
            return fetchResponse
        }
        catch {
            fetchPromise = await fetch(`lib/text/${file}`)
            fetchResponse = await fetchPromise.text()
            console.log(`Added txt file ${file} to text data.`)
            return fetchResponse
        }
    }
    catch (error) {
        console.log(error)
    }
}

loadModule("text-files")

setTimeout(() => {
    for (let i = 0; i < textToLoad.length; i++) {
        addText(textToLoad[i])
    }
}, 150)

setTimeout(() => {
    initializeScript("manage-text")
    initializeScript("main")
}, 300)
