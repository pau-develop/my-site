import styled from "styled-components";

const CanvasStyled = styled.div`
  width: 100%;
  height: 100%;
  .canvas-wrap {
    &__canvas {
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
    }
  }
`;

export default CanvasStyled;
