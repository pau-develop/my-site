import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 10%;
  background: #000;
  height: 10%;
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
      a:hover {
        animation: blink 0.1s infinite;
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
      a:hover {
        animation: blink 0.1s infinite;
      }
    }
  }
  @keyframes blink {
    0% {
      color: rgb(95, 81, 255);
    }
    100% {
      color: white;
    }
  }
`;

export default HeaderStyled;
