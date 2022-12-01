import styled from "styled-components";

const GameDisplayStyled = styled.div`
  width: 100%;
  height: 100%;
  .game-display {
    &__unity-canvas {
      width: 100%;
      height: 100%;
    }
    &__phaser-canvas {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export default GameDisplayStyled;
