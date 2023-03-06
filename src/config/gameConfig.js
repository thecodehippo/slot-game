export const Images = {
    apple: require('../images/apple.png'),
    lemon: require('../images/lemon.png'),
    grapes: require('../images/grapes.png'),
    kiwi: require('../images/kiwi.png'),
    pear: require('../images/pear.png'),
    watermelon: require('../images/watermelon.png'),
    strawberry: require('../images/strawberry.png'),
    cherry: require('../images/cherry.png'),
    banana: require('../images/bananas.png')
}

export const fruitSymbols = ["L", "A", "G", "K", "B", "S", "P", "W", "C"]

export const numReels = 6; // supports up to 10, need to extend default reels below for more
export const numSymbols = 60;
export const visibleRows = 4;
export const rtp = 10;
export const winningSymNum = 4;
export const tileHeight = 150;
export const tileWidth = 125;
export const tilesMoved = numSymbols * tileHeight;
export const visibleTileSize = tileHeight * visibleRows;
export const animationDelay = [500, 750, 1000, 0, 250, 1250]; // extend if needed to support number of reels
export const reelHeight = tileHeight * visibleRows;
export const animationStartPosition = (numSymbols - 4) * tileHeight;
export const animationEndPosition = 0;
export const winMessage = "Congratulations, you win!"
export const loseMessage = "Better luck next time"

export const defaultReels = [
    ['W', 'W', 'G', 'P'],
    ['A', 'W', 'L', 'C'],
    ['W', 'S', 'C', 'P'],
    ['B', 'A', 'S', 'S'],
    ['B', 'W', 'B', 'P'],
    ['G', 'B', 'W', 'W'],
    ['W', 'S', 'C', 'P'],
    ['B', 'A', 'S', 'S'],
    ['B', 'W', 'B', 'P'],
    ['G', 'B', 'W', 'W']
]


/*
move more vars to config rather than hard coding;
use more arr methods like map;
*/