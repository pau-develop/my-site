import styled from "styled-components";
import { motion } from "framer-motion";

const GalleryStyled = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  .gallery {
    &__wrap {
      margin: auto auto;
      display: flex;
      justify-content: space-between;
      width: 80%;
      height: 90%;
    }
  }
`;

export default GalleryStyled;
