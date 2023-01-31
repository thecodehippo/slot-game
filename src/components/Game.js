import React, { useState } from 'react';
import Reel from './Reel'
import { numReels, defaultReels, animationStartPosition, animationEndPosition } from '../config/gameConfig';
import { generateReels } from '../utils/gameUtils';

const Game = () => {
    const [animate, setAnimate] = useState(false);
    const [reels, setReels] = useState(defaultReels);
    const [stopCount, setStopCount] = useState(1);
    const [position, setPosition] = useState(0);
    const [visibleTiles, setVisibleTiles] = useState(defaultReels);

    function go() {
        setPosition(animationStartPosition);
        let { reelArr, visibleSymbolsArr } = generateReels(reels);
        setVisibleTiles(visibleSymbolsArr);
        setReels(reelArr);
        setStopCount(1);
        setAnimate(true);
    }

    function stop() {
        let newStopCount = stopCount + 1;
        setStopCount(newStopCount);
        if(stopCount === numReels){
            setAnimate(false);
            setPosition(animationEndPosition)
        }
    }

    const createReels = () => {
        let reelArr = [];
        for(let i = 0; i < numReels; i++) {
            reelArr.push(
                <Reel key={`r${i}`} reels={reels[i]} reelNum={i} animating={animate} onAnimationEnd={stop} position={position} visibleTiles={visibleTiles[i]} />
            )
        }
        return reelArr;
    }

    return (
        <div className="wrapper">
            <div className="game">
                {createReels()}
            </div>
            <button onClick={animate ? stop : go}>Spin</button>
        </div>
    )

}

export default Game;