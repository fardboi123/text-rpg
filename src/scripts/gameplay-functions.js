let choiceFunctions = {
    proceed() {
        let travelDistance = Math.round(Math.max(40, Math.random() * 150))
        player.coordinates.y += travelDistance
        logText(`You have just travelled ${travelDistance} meters north.`)
    },
    check_inventory(){
        logText("You have the following:")
        for (let i = 0; i < player.inventory.length; i++) {
            logText(player.inventory[i].name)
        }
    }
}

function acquireItem(item, quantity) {
    let multiple = quantity && quantity > 1
    
    if (multiple) {
        for (let i = 0; i < quantity; i++) {
            player.inventory.push(structuredClone(item))
        }
    } else {
        player.inventory.push(structuredClone(item))
    }
    
    logText(
        `You have just acquired
        ${multiple && quantity || "a"} ${item.name}${multiple && "s" || ""}.`)
}
