function rest() {
    logText("You find a nearby rock and rest.")
}

function proceed() {
    let travelDistance = Math.round(Math.max(40, Math.random() * 150))

    game.distanceTravelled += travelDistance
    logText(`You have just travelled ${travelDistance} meters.`)
}