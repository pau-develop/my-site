import styled from "styled-components";

const GameHowToStyled = styled.div`
  width: 100%;
  height: 100%;
  color: rgb(95, 81, 255);
  padding: 2% 5%;
  .how-to {
    &__contents {
      width: 100%;
      height: 90%;
      padding: 5%;
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 5%;
    text-align: center;
  }
  p {
    text-align: center;
    height: 20%;
    font-size: 0.75rem;
    line-height: 200%;
  }
  span {
    color: rgb(200, 200, 200);
  }
`;

export default GameHowToStyled;
