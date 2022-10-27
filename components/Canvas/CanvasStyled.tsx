import styled from "styled-components";
import { motion } from "framer-motion";

const CanvasStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .canvas-wrap {
    &__canvas {
      margin: auto auto;
      width: 90%;
      height: 90%;
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }

    &__canvas:focus {
      outline: none;
    }
  }
`;

export default CanvasStyled;
