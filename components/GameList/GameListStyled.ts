import styled from "styled-components";

const GameListStyled = styled.div`
  width: 20%;
  right: 10%;
  top: 13%;
  z-index: 2;
  position: absolute;
  .menu-wrap {
    &__list {
      width: 100%;
      color: rgb(95, 81, 255);
      h2 {
        background: linear-gradient(
          to left,
          #000,
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          #000
        );
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 5%;
      }
      ul {
        list-style: none;
        width: 100%;
        padding: 0;
      }
      li {
        padding-right: 5%;

        cursor: pointer;
        margin-top: 5%;
        background: linear-gradient(
          to left,
          #000,
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          rgb(0, 0, 50),
          #000
        );

        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default GameListStyled;
