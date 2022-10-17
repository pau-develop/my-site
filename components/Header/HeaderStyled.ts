import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 5%;
  background: #000;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header {
    &__title {
      padding: 0;
      margin: 0;
      color: #fff;
      a:-webkit-any-link {
        color: rgb(95, 81, 255);
        cursor: pointer;
        text-decoration: none;
      }
    }
    &__nav {
      color: white;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 500px;
      a:-webkit-any-link {
        color: rgb(95, 81, 255);
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderStyled;
