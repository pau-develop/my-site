import styled from "styled-components";

const CanvasStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .canvas-wrap {
    &__canvas {
      width: 100%;
      height: 100%;
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }
    &__canvas:focus {
      outline: none;
    }
  }

  &__unity-canvas {
    width: 100%;
    height: 100%;
  }
`;

export default CanvasStyled;
