import styled from "styled-components";

const GalleryDisplayStyled = styled.div`
  position: absolute;
  height: 70%;
  padding: 2%;
  width: 44%;
  right: 14%;
  top: 19%;
  color: rgb(95, 81, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border: 5px solid rgb(95, 81, 255);
    image-rendering: pixelated;
    width: 100%;
    max-height: 100%;
  }
`;

export default GalleryDisplayStyled;
