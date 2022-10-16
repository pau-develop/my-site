import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 5%;
  background: #000;
  border-bottom: 2px solid #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header {
    &__title {
      padding: 0;
      margin: 0;
      color: #fff;
    }
    &__title:hover {
      cursor: pointer;
    }
    &__nav {
      color: white;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 500px;
    }
    &__nav:hover {
      cursor: pointer;
    }
  }
`;

export default HeaderStyled;
