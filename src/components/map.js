let worldMap = {
    "forest": new Area("Forest", new Vector2(0,0), new Vector2(400,400))
}

worldMap.forest.subLocations = [
    new Subarea("Decaying Tree", new Vector2(0,0), new Vector2(5,5), worldMap.forest)
]