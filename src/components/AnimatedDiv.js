import styled, { css, keyframes } from 'styled-components'
import { animationStartPosition, animationEndPosition } from '../config/gameConfig';

const rotate = keyframes`
    from {
        transform: translateY(-${animationStartPosition}px);
    }
    to {
        transform: translateY(${animationEndPosition}px);
    }
`;

const goAnimation = (props) => css`
  animation-name: ${rotate};
  animation-duration: 2500ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-delay: ${props.animationDelay}ms;
  animation-fill-mode: forwards;
`;

const AnimatedDiv = styled.div`

transform: translateY(-${(props) => props.position}px);

${(props) => props.animating && goAnimation}
${(props) => props.animating && css``}

`;

export default AnimatedDiv;