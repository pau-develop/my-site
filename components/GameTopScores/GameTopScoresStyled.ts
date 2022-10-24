import styled from "styled-components";

const GameTopScoresStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  color: rgb(95, 81, 255);
  .scores {
    &__title {
      width: 100%;
      text-align: center;
    }
    &__list {
    }
  }
`;

export default GameTopScoresStyled;
