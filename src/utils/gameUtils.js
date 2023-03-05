import { fruitSymbols, visibleRows, numReels, numSymbols, winningSymNum } from '../config/gameConfig';

export const generateReels = (reels) => {

    let reelArr = [];

    let appleCount = 0;
    let lemonCount = 0;
    let grapesCount = 0;
    let kiwiCount = 0;
    let bananaCount = 0;
    let pearCount = 0;
    let watermelonCount = 0;
    let strawberryCount = 0;
    let cherryCount = 0;

    for(let n = 0; n < numReels; n++) {

        let symbolArr = [];
        let reelCount = 0;

        for(let p = 0; p < numSymbols; p++) {

            if(p < visibleRows && p < numSymbols) {

                let symbol = fruitSymbols[(Math.floor(Math.random() * fruitSymbols.length))]

                switch(symbol) {
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

    if (
        appleCount > winningSymNum
        ||
        lemonCount > winningSymNum
        ||
        grapesCount > winningSymNum
        ||
        kiwiCount > winningSymNum
        ||
        bananaCount > winningSymNum
        ||
        pearCount > winningSymNum
        ||
        watermelonCount > winningSymNum
        ||
        strawberryCount > winningSymNum
        ||
        cherryCount > winningSymNum
    ) {
        let win = true;
        return { reelArr, win }; 
    } 
    else {
        let win = false;
        return { reelArr, win };
    }
}