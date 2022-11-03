import styled from "styled-components";

const GalleryListStyled = styled.div`
  width: 30%;
  height: 100%;
  color: rgb(95, 81, 255);
  @keyframes imageBlink {
    0% {
      border-color: rgb(95, 81, 255);
    }
    100% {
      border-color: white;
    }
  }
  .gallery-list {
    &__title {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5%;
      height: 10%;
      margin: 0;
      border: 1px solid rgb(95, 81, 255);
      text-align: center;
    }
    &__list {
      background-color: black;
      border: 1px solid rgb(95, 81, 255);
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
          border: 1px solid rgb(95, 81, 255);
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
