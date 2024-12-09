let choices = {
    "default": [
        {
            "Text": "Proceed.",
            "Function": () => {
                logText("You choose to proceed.")
                choiceFunctions.proceed()
            }
        },
        {
            "Text": "Rest.",
            "Function": () => {
                logText("You choose to rest.")
                
                switch(game.choicesMade) {
                    case 1:
                        logText([
                            "While resting back on the tree, you stumble upon a machete.",
                            "It's tip is broken in half, and the blade is a bit dull,",
                            "but you notice that you don't have any sort of weapon yourself,",
                            "so this would have to do for the time being."
                        ])
                        acquireItem(weapons["broken-machete"])
                        break
                }
            }
        },
        {
            "Text": "Check Inventory.",
            "Function": () => {
                logText("You choose to check your inventory.")
                choiceFunctions.check_inventory()
            }
        }
    ]
}