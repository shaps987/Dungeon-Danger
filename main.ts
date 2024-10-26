let MOB_1_1_VX = 100
let MAX_LEVEL = 2
info.score()
function initiate_character() {
    let character = sprites.create(assets.image`
        character
    `, SpriteKind.Player)
    character.ay = 300
    tiles.placeOnTile(character, tiles.getTileLocation(10, 14))
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

function level1() {
    tiles.setCurrentTilemap(tilemap`level1`)
    initiate_character()
    game.onUpdateInterval(1000, function on_on_update_2() {
        let mob_1_1_1: Sprite;
        let mob_1_1_2: Sprite;
        let mob_1_1_3: Sprite;
        if (info.player1.score() == 0) {
            mob_1_1_1 = sprites.create(img`
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
            mob_1_1_2 = sprites.create(img`
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
            mob_1_1_3 = sprites.create(img`
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
        }
        
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
    scene.onOverlapTile(SpriteKind.Player, img`
            c c c c c c c c c c c c c c c c
            b b b d d d d d d d d d d b b b
            d d c b b b b b b b b b b c d d
            d d c c c c c c c c c c c c d d
            d d b d d d d d d d d d d b d d
            d d c b b b b b b b b b b c d d
            d d c c c c c c c c c c c c d d
            d d b d d d d d d d d d d b d d
            d d c b b b b b b b b b b c d d
            d d c c c c c c c c c c c c d d
            d d b d d d d d d d d d d b d d
            d d c b b b b b b b b b b c d d
            d d c c c c c c c c c c c c d d
            d d b d d d d d d d d d d b d d
            d d c b b b b b b b b b b c d d
            d d c c c c c c c c c c c c d d
        `, function climb_ladder(sprite: Sprite, location: tiles.Location) {
        sprite.vy = -100
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function mobs_1_1_touch_player(sprite2: Sprite, otherSprite: Sprite) {
        game.gameOver(false)
    })
    scene.onOverlapTile(SpriteKind.Player, img`
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
                6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6
                6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6
                6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6
                6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6
                6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6
                6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6
                6 9 c 6 6 6 9 9 9 6 9 c c c 9 6
                6 9 c c c 9 6 9 9 9 6 6 6 c 9 6
                6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6
                6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6
                6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6
                6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6
                6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6
                6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            `, function level2() {
        game.reset()
        info.score()
        info.setScore(1)
        tiles.setCurrentTilemap(tilemap`level2`)
        initiate_character()
    })
}

if (info.player1.score() == 0) {
    level1()
}

