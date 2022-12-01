import styled from "styled-components";

const GameListStyled = styled.div`
  width: 20%;
  left: 10%;
  height: 20%;
  top: 13%;
  z-index: 2;
  position: absolute;
  border: 1px solid rgb(95, 81, 255);
  background-color: black;
  .menu-wrap {
    &__list {
      width: 100%;
      height: 100%;
      color: rgb(95, 81, 255);
      display: flex;
      flex-direction: column;
      h2 {
        margin: 0;
        border-bottom: 1px solid rgb(95, 81, 255);
        flex: 1;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 5%;
      }
      div {
        margin: 0;
        flex: 1;
        list-style: none;
        width: 100%;
        padding: 0;
        display: flex;
        button {
          flex: 1;
          background-color: transparent;
          color: rgb(95, 81, 255);
          cursor: pointer;
        }
        button:hover {
          animation: blink 0.1s infinite;
        }
        span {
          height: 100%;
          flex: 4;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
        }
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
  }
`;

export default GameListStyled;
