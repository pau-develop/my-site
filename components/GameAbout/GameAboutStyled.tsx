import styled from "styled-components";

const GameAboutStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  color: rgb(95, 81, 255);
  .about {
    &__title {
      width: 100%;
      text-align: center;
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
      padding: 5%;
      text-align: center;
      font-size: 0.75rem;
      line-height: 200%;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
export default GameAboutStyled;
