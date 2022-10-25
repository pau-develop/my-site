import styled from "styled-components";

const GameHowToStyled = styled.div`
  width: 100%;
  height: 100%;
  color: rgb(95, 81, 255);
  padding: 2% 5%;
  .how-to {
    &__wrap {
      display: flex;
      height: 85%;
    }
    &__left {
      width: 50%;
      height: 100%;
      p {
        font-size: 0.7rem;
        height: 23%;
      }
    }
    &__right {
      width: 50%;
      height: 100%;
      div {
        height: 23%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 5%;
    text-align: center;
  }
  p {
    font-size: 0.75rem;
    line-height: 200%;
  }
  span {
    color: rgb(200, 200, 200);
  }
`;

export default GameHowToStyled;
