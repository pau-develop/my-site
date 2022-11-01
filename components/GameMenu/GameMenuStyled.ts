import styled from "styled-components";

const GameMenuStyled = styled.div`
  width: 20%;
  height: 40%;
  left: 10%;
  bottom: 22%;
  z-index: 2;
  padding: 0;
  position: absolute;
  background-color: black;
  .game-menu {
    &__list {
      border: 1px solid rgb(95, 81, 255);
      width: 100%;
      color: rgb(95, 81, 255);
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__list--disabled {
      border: 1px solid rgb(95, 81, 255, 0.5);
      width: 100%;
      color: rgb(95, 81, 255);
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__list-item {
      cursor: pointer;
      border-bottom: 1px solid rgb(95, 81, 255);
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__list-item:last-child {
      border: none;
    }
    &__list-item:hover {
      animation: blink 0.1s infinite;
    }

    &__list-item--current {
      cursor: auto;
      color: rgb(95, 81, 255, 0.5);
      border-bottom: 1px solid rgb(95, 81, 255, 0.5);
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__list-item--current:last-child {
      border: none;
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
  @keyframes blink {
    0% {
      color: rgb(95, 81, 255);
    }
    100% {
      color: white;
    }
  }
`;

export default GameMenuStyled;
