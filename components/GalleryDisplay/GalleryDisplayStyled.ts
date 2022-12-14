import styled from "styled-components";

const GalleryDisplayStyled = styled.div`
  position: absolute;
  height: 90%;
  padding: 2%;
  width: 44%;
  right: 14%;
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .gallery-display {
    &__info {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        background: black;
        height: 70%;
        border: 1px solid ${(props) => props.theme.fontColor};
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__image {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  img {
    border: 1px solid ${(props) => props.theme.fontColor};
    image-rendering: pixelated;
    width: 100%;
    max-height: 100%;
  }
`;

export default GalleryDisplayStyled;
