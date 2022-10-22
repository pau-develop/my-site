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
  .menu-wrap {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0%;
    right: 0%;
    ul {
      position: absolute;
      width: 25%;
      right: 0%;
      color: rgb(95, 81, 255);
      list-style: none;
      padding: 0;
      li {
        cursor: pointer;
        margin-top: 5%;
        background-color: black;
        border-radius: 25px 0 0 25px;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li.menu-wrap__big-item {
        height: 90px;
        font-size: 1.5rem;
      }
      li.menu-wrap__medium-item {
        height: 75px;
      }
    }

    &__left-container {
      background-color: black;
      position: absolute;
      top: 12.5%;
      left: 11.5%;
      width: 53.5%;
      height: 64%;
    }
  }
`;

export default CanvasStyled;
