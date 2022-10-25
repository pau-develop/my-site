import styled from "styled-components";

const GameMenuStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  .game-menu {
    &__list {
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
      li:nth-child(2) {
        height: 120px;
        img {
          width: 60%;
          height: 90%;
        }
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
    &__unity-canvas {
      width: 100%;
      height: 100%;
    }
  }
`;

export default GameMenuStyled;
