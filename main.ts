function initiate_character() {
    
    character = sprites.create(assets.image`
        character
    `, SpriteKind.Player)
    character.ay = 300
    tiles.placeOnTile(character, tiles.getTileLocation(1, 14))
    scene.cameraFollowSprite(character)
    controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
        if (character.isHittingTile(CollisionDirection.Bottom)) {
            character.vy = -175
        }
        
    })
    game.onUpdate(function on_on_update() {
        character.x += controller.dx()
    })
}

let character : Sprite = null
let LEVEL = 1
let MOB_1_1_VX = 100
if (LEVEL == 1) {
    tiles.setCurrentTilemap(tilemap`
        level1
    `)
    initiate_character()
    game.onUpdateInterval(1000, function on_on_update_2() {
        let mob_1_1_1 = sprites.create(img`
                . . . . . . . . . . . . . . . .
                            . . . . . . 4 4 4 4 . . . . . .
                            . . . . 4 4 4 5 5 4 4 4 . . . .
                            . . . 3 3 3 3 4 4 4 4 4 4 . . .
                            . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
                            . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
                            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
                            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
                            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
                            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
                            . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
                            . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
                            . . . 4 2 2 2 2 2 2 2 2 4 . . .
                            . . . . 4 4 2 2 2 2 4 4 . . . .
                            . . . . . . 4 4 4 4 . . . . . .
                            . . . . . . . . . . . . . . . .
            `, SpriteKind.Enemy)
        mob_1_1_1.vx = MOB_1_1_VX
        tiles.placeOnTile(mob_1_1_1, tiles.getTileLocation(4, 2))
        let mob_1_1_2 = sprites.create(img`
                . . . . . . . . . . . . . . . .
                                    . . . . . . 4 4 4 4 . . . . . .
                                    . . . . 4 4 4 5 5 4 4 4 . . . .
                                    . . . 3 3 3 3 4 4 4 4 4 4 . . .
                                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
                                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
                                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
                                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
                                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
                                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
                                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
                                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
                                    . . . 4 2 2 2 2 2 2 2 2 4 . . .
                                    . . . . 4 4 2 2 2 2 4 4 . . . .
                                    . . . . . . 4 4 4 4 . . . . . .
                                    . . . . . . . . . . . . . . . .
            `, SpriteKind.Enemy)
        mob_1_1_2.vx = MOB_1_1_VX
        tiles.placeOnTile(mob_1_1_2, tiles.getTileLocation(4, 5))
        let mob_1_1_3 = sprites.create(img`
                . . . . . . . . . . . . . . . .
                                    . . . . . . 4 4 4 4 . . . . . .
                                    . . . . 4 4 4 5 5 4 4 4 . . . .
                                    . . . 3 3 3 3 4 4 4 4 4 4 . . .
                                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
                                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
                                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
                                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
                                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
                                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
                                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
                                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
                                    . . . 4 2 2 2 2 2 2 2 2 4 . . .
                                    . . . . 4 4 2 2 2 2 4 4 . . . .
                                    . . . . . . 4 4 4 4 . . . . . .
                                    . . . . . . . . . . . . . . . .
            `, SpriteKind.Enemy)
        mob_1_1_3.vx = MOB_1_1_VX
        tiles.placeOnTile(mob_1_1_3, tiles.getTileLocation(4, 8))
    })
    scene.onOverlapTile(SpriteKind.Enemy, img`
            e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e
                    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
                    e e e e e e e e e e e e e e e e
                    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
                    e 4 e e e e e e e e e e e e 4 e
                    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e
                    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
                    e 4 e e e e e e e e e e e e 4 e
                    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e
                    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
                    e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e
                    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
                    e e e e e e e e e e e e e e e e
                    e e c c c c c c c c c c c c e e
                    e e c c c c c c c c c c c c e e
                    e e e e e e e e e e e e e e e e
        `, function destroy_mobs_1_1(sprite: Sprite, location: tiles.Location) {
        sprite.destroy()
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function mobs_1_1_touch_player(sprite2: Sprite, otherSprite: Sprite) {
        game.gameOver(false)
    })
} else if (LEVEL == 2) {
    tiles.setCurrentTilemap(tilemap`
        level2
    `)
    initiate_character()
}

