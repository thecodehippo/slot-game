import React from "react";
import { Images } from '../config/gameConfig';

const Symbol = (props) => {

    function getImage() {
        switch(props.symbol) {
            case "A":
                return Images.apple;
            case "G":
                return Images.grapes;
            case "L":
                return Images.lemon;
            case "K":
                return Images.kiwi;
            case "B":
                return Images.banana;
            case "S":
                return Images.strawberry;
            case "P":
                return Images.pear;
            case "W":
                return Images.watermelon;
            default:
                return Images.cherry;
        }
    }

    let symbolSource = getImage();
    
    function getWinningSymbolBoolean() {

        if(props.winningSymbolBoolean) {
            return (
                <img className="symbol-win" src={symbolSource} alt="symbol" />
            )
        } else return (
            <img className="symbol" src={symbolSource} alt="symbol" />
        )
    }

    return (
        <div>
            {getWinningSymbolBoolean()}
        </div>
    )
}

export default Symbol;