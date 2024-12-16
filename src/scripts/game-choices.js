let choices = {
    "default": [
        {
            "Text": "Proceed.",
            "Function": () => {
                logQuestion("Which direction?")
                
                let proceedChoices = []
                let choicesToCreate = [
                    ["North", new Vector2(0, 1)],
                    ["East", new Vector2(1, 0)],
                    ["South", new Vector2(0, -1)],
                    ["West", new Vector2(-1, 0)],
                ]

                for (let i = 0; i < choicesToCreate.length; i++) {
                    proceedChoices[i] = {
                        "Text": choicesToCreate[i][0],
                        "Function": () => {
                            logText(`You choose to proceed ${choicesToCreate[i][0].toLowerCase()}.`)
                            choiceFunctions.proceed(choicesToCreate[i][1])
                        }
                    }
                }
                
                listChoices(null)
                listChoices(proceedChoices)
            }
        },
        {
            "Text": "Rest.",
            "Function": () => {
                logText("You choose to rest.")

                switch(true) {
                    case player.coordinates.equals(new Vector2(0, 0)):
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