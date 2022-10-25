import styled from "styled-components";

const GameListStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0%;
  right: 0%;
  .menu-wrap {
    &__list {
      position: absolute;
      width: 25%;
      right: 0%;
      color: rgb(95, 81, 255);
      list-style: none;
      padding: 0;
      li {
        margin-top: 5%;
        background-color: black;
        border-radius: 25px 0 0 25px;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li:not(:first-child) {
        cursor: pointer;
        height: 120px;
        img {
          width: 60%;
          height: 90%;
        }
      }
    }
  }
`;

export default GameListStyled;
