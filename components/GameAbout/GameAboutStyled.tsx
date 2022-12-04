import styled from "styled-components";

const GameAboutStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  color: ${(props) => props.theme.fontColor};
  .about {
    &__title {
      width: 100%;
      text-align: center;
    }
    &__images {
      margin-top: 8%;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 35%;
        margin: 0 2%;
        border: 1px solid ${(props) => props.theme.fontColor};
      }
    }
    &__image {
      width: 33%;
      height: 33%;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__text {
      margin: 5%;
      text-align: center;
      font-size: ${(props) => props.theme.fontSizeSmall};
      line-height: 200%;
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        animation: blink 0.1s infinite;
      }
    }
    @keyframes blink {
      0% {
        color: ${(props) => props.theme.fontColor};
      }
      100% {
        color: white;
      }
    }
  }
`;
export default GameAboutStyled;
