import styled from "styled-components";

const GalleryListStyled = styled.div`
  @keyframes imageBlink {
    0% {
      border-color: ${(props) => props.theme.fontColor};
    }
    100% {
      border-color: white;
    }
  }
  width: 30%;
  height: 100%;
  color: ${(props) => props.theme.fontColor};

  .gallery-list {
    &__title {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5%;
      height: 10%;
      margin: 0;
      border: 1px solid ${(props) => props.theme.fontColor};
      text-align: center;
    }
    &__list {
      background-color: black;
      border: 1px solid ${(props) => props.theme.fontColor};
      border-top: none;
      max-height: 90%;
      list-style: none;
      padding: 5%;
      margin: 0;
      display: grid;
      grid-template-columns: 50% 50%;
      li {
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5% 0 5%;
        img {
          border: 1px solid ${(props) => props.theme.fontColor};
          width: 100px;
          max-width: 100%;
        }
      }
      li:hover {
        img {
          animation: imageBlink 0.1s infinite;
        }
      }
    }
  }
`;

export default GalleryListStyled;
