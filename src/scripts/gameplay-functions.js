let choiceFunctions = {
    proceed(direction) {
        let travelDistance = Math.round(Math.random() * 100 + 40)
        player.coordinates = player.coordinates.add((new Vector2(travelDistance, travelDistance)).multiply(direction))
        logText(`You have just travelled ${travelDistance} meters.`)
    },
    check_inventory(){
        logText("You have the following:")
        for (let i = 0; i < player.inventory.length; i++) {
            logText(player.inventory[i].name)
        }
    }
}

function findCurrentArea() {
    let areas = Object.entries(worldMap)

    for (let i = 0; i < areas.length; i++) {
        let area = areas[i][1]
        
        if (area.contains(player.coordinates)) {
            for (k = 0; k < area.subLocations.length; k++) {
                if (area.subLocations[k].contains(player.coordinates)) {
                    console.log(`Player is in ${area.subLocations[k].name}`);
                    return
                } 
            }
            
            console.log(`Player is in ${areas[i][1].name}`);
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
