import { fruitSymbols, rtp, visibleRows, numReels, numSymbols } from '../config/gameConfig';

export const generateReels = (reels) => {

    let reelArr = [];
    let visibleSymbolsArr = [];

    for(let n = 0; n < numReels; n++) {
        let symbolArr = [];
        let prevSymArr = [];
        for(let p = 0; p < numSymbols; p++) {
            if(p >= visibleRows && p < numSymbols) {
                symbolArr.push(fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]);
            } else {
                prevSymArr.push(reels[n][p])
                symbolArr.push(fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]);
            }
        }
        reelArr.push(symbolArr);
        visibleSymbolsArr.push(prevSymArr);
    }

    //let { result, winningSymbol } = winMath();

    return { reelArr, visibleSymbolsArr };
}

const winMath = () => {
    // create a number randomly between 1 and 100;
    let genNum = Math.ceil(Math.random() * 100);
    let winningSymbol = fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]
    let result = genNum > rtp ? true : false;
    return {
        result: result,
        winningSymbol: winningSymbol
    }
}