import styled from "styled-components";
import { motion } from "framer-motion";

const LayoutStyled = styled(motion.main)`
  background-color: #000;
  width: 100%;
  height: 85%;
  .wrap {
  }
  .wrap > div {
    width: 100%;
    height: 100%;
  }
  .wrap main {
    width: 100%;
    height: 85%;
  }
`;

export default LayoutStyled;
