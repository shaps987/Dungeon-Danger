// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005040404040404040909050409010f0703010101010101010307030108010e0703010d030a0101010c07030108010e0703010103080101010307030108010e0703010103080401010307030108010e07030d01030a0101010c07030108010e0703010103080101010307030108010e0703010103080401010307030108010e0703010d030a0101010c07030108010e070301010307010101020b02060b010e0703010102060601010101010101010e0702060101010209010101010101010e0705040404010302090101010101010e0703010101010307020901010101010e0703010101010307030801010101010e070206060606060606020606060606060b`, img`
2 2 2 2 2 2 2 2 2 . . . 2 . . 2 
2 . . . . . . . 2 2 . . 2 . . 2 
2 . 2 2 2 . . . . 2 . . 2 . . 2 
2 . . 2 2 . . . 2 2 . . 2 . . 2 
2 . . 2 2 2 . . 2 2 . . 2 . . 2 
2 2 . 2 2 . . . . 2 . . 2 . . 2 
2 . . 2 2 . . . 2 2 . . 2 . . 2 
2 . . 2 2 2 . . 2 2 . . 2 . . 2 
2 . 2 2 2 . . . . 2 . . 2 . . 2 
2 . . 2 2 . . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 . . . . . . . . . 2 
2 2 . . . 2 2 . . . . . . . . 2 
. 2 2 2 . 2 . 2 . . . . . . . 2 
2 . . . . 2 . . 2 . . . . . . 2 
2 . . . . 2 . . 2 . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.stairLadder,sprites.dungeon.floorDarkDiamond,sprites.dungeon.stairSouth,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
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
