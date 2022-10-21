import styled from "styled-components";

const CanvasStyled = styled.div`
  width: 100%;
  height: 100%;
  .canvas-wrap {
    &__canvas {
      position: relative;
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
    &__game-menu {
      z-index: 2;
      position: absolute;
      top: 10%;
      right: 0%;
      width: 25%;
      ul {
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
        li:first-child {
          height: 80px;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default CanvasStyled;
