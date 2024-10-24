// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000050404040404040409050000000000000301010101010101030700000000000003010d030a0101010c070000000000000301010308010101030700000000000003010103080401010307000000000000030d01030a0101010c07000000000000030101030801010103070000000000000301010308040101030700000000000003010d030a0101010c070000000000000301010307010101020b000000000000030101020606010101010100000000000206010101020901010101000000000005040404010302090101010000000000030101010103070209010100000000000301010101030703080101000000000002060606060606060206060000000000`, img`
2 2 2 2 2 2 2 2 2 2 . . . . . . 
2 . . . . . . . 2 2 . . . . . . 
2 . 2 2 2 . . . . 2 . . . . . . 
2 . . 2 2 . . . 2 2 . . . . . . 
2 . . 2 2 2 . . 2 2 . . . . . . 
2 2 . 2 2 . . . . 2 . . . . . . 
2 . . 2 2 . . . 2 2 . . . . . . 
2 . . 2 2 2 . . 2 2 . . . . . . 
2 . 2 2 2 . . . . 2 . . . . . . 
2 . . 2 2 . . . 2 2 . . . . . . 
2 . . 2 2 2 . . . . . . . . . . 
2 2 . . . 2 2 . . . . . . . . . 
. 2 2 2 . 2 . 2 . . . . . . . . 
2 . . . . 2 . . 2 . . . . . . . 
2 . . . . 2 . . 2 . . . . . . . 
2 2 2 2 2 2 . . . 2 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.stairLadder,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
