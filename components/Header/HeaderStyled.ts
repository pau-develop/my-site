import styled from "styled-components";

const HeaderStyled = styled.header`
  @keyframes blink {
    0% {
      color: ${(props) => props.theme.fontColor};
    }
    100% {
      color: white;
    }
  }
  @keyframes blinkIcon {
    0% {
      filter: ${(props) => props.theme.svgColor};
    }
    100% {
      filter: ${(props) => props.theme.filter};
    }
  }
  padding: 0 10%;
  background: #000;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header {
    &__left {
      display: flex;
      height: 100%;
      align-items: center;
    }
    &__theme {
      margin: 0 10px;
      height: 32px;
      width: 32px;
      filter: ${(props) => props.theme.svgColor};
    }
    &__theme:hover {
      cursor: pointer;
      animation: blinkIcon 0.1s infinite;
    }
    &__title {
      padding: 0;
      margin: 0;
      color: #fff;
    }
    &__title {
      a:-webkit-any-link {
        color: ${(props) => props.theme.fontColor};
        cursor: pointer;
        text-decoration: none;
      }
    }
    &__title a:hover {
      animation: blink 0.1s infinite;
    }
    &__title--current {
      a:-webkit-any-link {
        color: ${(props) => props.theme.fontColor};
        text-decoration: none;
        cursor: auto;
      }
    }
    &__nav {
      color: white;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 500px;
    }
    &__link {
      a:-webkit-any-link {
        color: ${(props) => props.theme.fontColor};
        cursor: pointer;
        text-decoration: none;
      }
    }
    &__link a:hover {
      animation: blink 0.1s infinite;
    }
    &__link--current {
      a:-webkit-any-link {
        color: ${(props) => props.theme.fontColorFade};
        text-decoration: none;
        cursor: auto;
      }
    }
  }
`;

export default HeaderStyled;
