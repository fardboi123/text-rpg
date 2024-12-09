function initializeScript(name) {
    let loadedScript = document.createElement("script")
    loadedScript.src = `src/scripts/${name}.js`
    document.body.appendChild(loadedScript)
}

initializeScript("game-text")
initializeScript("manage-text")
initializeScript("gameplay-functions")
initializeScript("game-choices")
initializeScript("main")
