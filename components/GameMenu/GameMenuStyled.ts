import styled from "styled-components";

const GameMenuStyled = styled.ul`
  width: 20%;
  right: 10%;
  bottom: 22%;
  z-index: 2;
  padding: 0;
  position: absolute;
  .game-menu {
    &__list {
      width: 100%;
      color: rgb(95, 81, 255);
      list-style: none;
      padding: 0;

      li {
        background: linear-gradient(
          to left,
          #000,
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          #000
        );
        cursor: pointer;
        margin-top: 5%;

        border-radius: 25px 0 0 25px;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__left-container {
      position: absolute;
      top: 15.5%;
      left: 15.5%;
      width: 48%;
      height: 59.5%;
    }
    &__unity-canvas {
      width: 100%;
      height: 100%;
    }
  }
`;

export default GameMenuStyled;
