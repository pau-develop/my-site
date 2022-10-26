import styled from "styled-components";

const GameListStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  .menu-wrap {
    &__title {
      color: rgb(95, 81, 255);
    }
    &__list {
      position: absolute;
      top: 7%;
      width: 20%;
      right: 10%;
      color: rgb(95, 81, 255);
      h2 {
        background: linear-gradient(
          to right,
          #000,
          rgb(0, 0, 50),
          rgb(0, 0, 50)
        );
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 5%;
      }
      ul {
        list-style: none;
        padding: 0;
        width: 100%;
      }
      li {
        padding-right: 5%;
        text-align: right;
        cursor: pointer;
        margin-top: 5%;
        background: linear-gradient(
          to right,
          #000,
          rgb(0, 0, 50),
          rgb(0, 0, 50)
        );

        height: 60px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
`;

export default GameListStyled;
