import { fruitSymbols, visibleRows, numReels, numSymbols, winningSymNum } from '../config/gameConfig';

export const generateReels = (reels) => {

    let reelArr = [];
    let eligibleSymbolsForWin = [];

    for(let n = 0; n < numReels; n++) {

        let symbolArr = [];
        let reelCount = 0;

        for(let p = 0; p < numSymbols; p++) {

            if(p < visibleRows && p < numSymbols) {

                let symbol = fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]
                eligibleSymbolsForWin.push(symbol);
                symbolArr.push(symbol);

            }

            else if(p >= (numSymbols - visibleRows) && p < numSymbols) {

                symbolArr.push(reels[n][reelCount])
                reelCount++;
                
            }
            
            else {

                symbolArr.push(fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]);

            }

        }

        reelCount=0
        reelArr.push(symbolArr);
        
    }

    let pendingWinningSymbols = checkWin(eligibleSymbolsForWin);

    if(pendingWinningSymbols.length > 0) {
        let win = true;
        return { reelArr, win, pendingWinningSymbols };  
    }
    else {
        let win = false;
        return { reelArr, win, pendingWinningSymbols };
    }

}

const checkWin = (arr) => {

    let winningSymbols = [];
    let appleCount = 0;
    let bananaCount = 0;
    let watermelonCount = 0;
    let kiwiCount = 0;
    let cherryCount = 0;
    let grapesCount = 0;
    let lemonCount = 0;
    let strawberryCount = 0;
    let pearCount = 0;

    for(let i = 0; i <= arr.length; i++) {

        switch(arr[i]) {
            case "A":
                appleCount++
                break
            case "G":
                grapesCount++
                break
            case "L":
                lemonCount++
                break
            case "K":
                kiwiCount++
                break
            case "B":
                bananaCount++
                break
            case "S":
                strawberryCount++
                break
            case "P":
                pearCount++
                break
            case "W":
                watermelonCount++
                break
            default:
                cherryCount++
                break
        }

        if(appleCount > winningSymNum) {
            winningSymbols.push('A');
        }

        else if(grapesCount > winningSymNum) {
            winningSymbols.push('G');
        }

        else if(lemonCount > winningSymNum) {
            winningSymbols.push('L');
        }

        else if(kiwiCount > winningSymNum) {
            winningSymbols.push('K');
        }

        else if(bananaCount > winningSymNum) {
            winningSymbols.push('B');
        }

        else if(strawberryCount > winningSymNum) {
            winningSymbols.push('S');
        }

        else if(pearCount > winningSymNum) {
            winningSymbols.push('P');
        }

        else if(watermelonCount > winningSymNum) {
            winningSymbols.push('W');
        }

        else if(cherryCount > winningSymNum) {
            winningSymbols.push('C');
        }

    }

    return winningSymbols;

}

