import styled from "styled-components";

const GameHowToStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.fontColor};
  .how-to {
    &__contents {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90%;
      padding: 3%;
    }
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    height: 20%;
    font-size: ${(props) => props.theme.fontSizeSmall};
    line-height: 200%;
  }
  span {
    color: rgb(200, 200, 200);
  }
`;

export default GameHowToStyled;
