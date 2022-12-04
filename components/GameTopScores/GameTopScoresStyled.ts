import styled from "styled-components";

const GameTopScoresStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  color: ${(props) => props.theme.fontColor};
  .scores {
    &__title {
      width: 100%;
      text-align: center;
    }
    &__list {
      overflow-y: scroll;
      height: 80%;
      padding: 0 5%;
      margin: 0;
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        list-style: none;
        margin: 2% auto;
        width: 90%;
        text-align: center;
        span {
          font-size: ${(props) => props.theme.fontSizeMedium};
        }
        span:first-child {
          flex: 1;
        }
        span:nth-child(2) {
          flex: 1;
        }
        span:nth-child(3) {
          flex: 3;
        }
        span:nth-child(4) {
          flex: 3;
        }
      }
    }
  }
`;

export default GameTopScoresStyled;
