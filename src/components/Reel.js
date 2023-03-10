import React from 'react';
import Symbol from './Symbol';
import AnimatedDiv from './AnimatedDiv';
import { animationDelay, tileWidth, tileHeight, visibleTileSize } from '../config/gameConfig'

class Reel extends React.Component {

    insertSymbols() {

        let symbolArr = [];
        for(let i = 0; i < this.props.reels.length; i++) {

            let symbolDidWinResult = this.props.winningSymbols.indexOf(this.props.reels[i]) >= 0;

            symbolArr.push(<div key={`s${i}`} style={{
                width: tileWidth,
                height: tileHeight,
                backgroundColor: 'transparent',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center'
                }}
            ><Symbol key={`s${i}`} symbol={this.props.reels[i]} winningSymbolBoolean={symbolDidWinResult} /></div>)
        }

        return symbolArr;
    }

    render() {

        return (
            <div style={{
                overflow: 'hidden',
                padding:'0 25px',
                height: visibleTileSize,
                }}>
                <AnimatedDiv className="animated-div" position={this.props.position} animationDelay={animationDelay[this.props.reelNum]} animating={this.props.animating} onAnimationEnd={this.props.onAnimationEnd}>
                    {this.insertSymbols()}
                </AnimatedDiv>

            </div>
        )
    }

}

export default Reel;