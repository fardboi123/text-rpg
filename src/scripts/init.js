function initializeScript(name) {
    let loadedScript = document.createElement("script")
    loadedScript.src = `src/scripts/${name}.js`
    document.body.appendChild(loadedScript)

    return loadedScript
}

initializeScript("game-text")
initializeScript("gameplay-functions")
initializeScript("game-choices")
initializeScript("manage-text")
initializeScript("main")
