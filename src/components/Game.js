import React, { useState } from 'react';
import Reel from './Reel'
import { numReels, defaultReels, animationStartPosition, animationEndPosition, winMessage, loseMessage } from '../config/gameConfig';
import { generateReels } from '../utils/gameUtils';

const Game = () => {
    const [animate, setAnimate] = useState(false);
    const [reels, setReels] = useState(defaultReels);
    const [stopCount, setStopCount] = useState(1);
    const [position, setPosition] = useState(0);
    const [win, setWin] = useState(false);
    const [message, setMessage] = useState("Good luck, hit spin to play")

    function go() {
        setPosition(animationStartPosition);
        let { reelArr, win } = generateReels(reels);
        setWin(win);
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
            win ? setMessage(winMessage) : setMessage(loseMessage);
        }
    }

    const createReels = () => {
        let reelArr = [];
        for(let i = 0; i < numReels; i++) {
            reelArr.push(
                <Reel key={`r${i}`} reels={reels[i]} reelNum={i} animating={animate} onAnimationEnd={stop} position={position} />
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
            {message}
        </div>
    )

}

export default Game;