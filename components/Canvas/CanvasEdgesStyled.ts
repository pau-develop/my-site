import styled from "styled-components";

const CanvasEdgesStyled = styled.div`
  width: 90%;
  height: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  .canvas-edges {
    &__top {
      width: 100%;
      height: 10%;
      bottom: 90.1%;
      position: absolute;
      background: linear-gradient(#000, transparent);
    }
    &__bot {
      width: 100%;
      height: 10%;
      position: absolute;
      top: 90.1%;
      background: linear-gradient(transparent, #000);
    }
    &__left {
      width: 10%;
      height: 100%;
      right: 90.1%;
      position: absolute;
      background: linear-gradient(to right, #000, transparent);
    }
    &__right {
      width: 10%;
      height: 100%;
      position: absolute;
      left: 90.1%;
      background: linear-gradient(to left, #000, transparent);
    }
  }
`;

export default CanvasEdgesStyled;
