def initiate_character():
    global character
    character = sprites.create(assets.image("""
        character
    """), SpriteKind.player)
    character.ay = 300
    tiles.place_on_tile(character, tiles.get_tile_location(1, 14))
    scene.camera_follow_sprite(character)
    
    def on_a_pressed():
        if character.is_hitting_tile(CollisionDirection.BOTTOM):
            character.vy = -175
    controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)
    
    
    def on_on_update():
        character.x += controller.dx()
    game.on_update(on_on_update)
    
character: Sprite = None
LEVEL = 1
MOB_1_1_VX = 100
if LEVEL == 1:
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    initiate_character()
    
    def on_on_update_2():
        mob_1_1_1 = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        mob_1_1_1.vx = MOB_1_1_VX
        tiles.place_on_tile(mob_1_1_1, tiles.get_tile_location(4, 2))
        mob_1_1_2 = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        mob_1_1_2.vx = MOB_1_1_VX
        tiles.place_on_tile(mob_1_1_2, tiles.get_tile_location(4, 5))
        mob_1_1_3 = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        mob_1_1_3.vx = MOB_1_1_VX
        tiles.place_on_tile(mob_1_1_3, tiles.get_tile_location(4, 8))
    game.on_update_interval(1000, on_on_update_2)
    
    
    def destroy_mobs_1_1(sprite, location):
        sprite.destroy()
    scene.on_overlap_tile(SpriteKind.enemy,
        img("""
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
        """),
        destroy_mobs_1_1)
    
    
    def mobs_1_1_touch_player(sprite2, otherSprite):
        game.game_over(False)
    sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, mobs_1_1_touch_player)
    
elif LEVEL == 2:
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    initiate_character()