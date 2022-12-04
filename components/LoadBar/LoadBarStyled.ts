import styled from "styled-components";
import { motion } from "framer-motion";

const LoadBarStyled = styled(motion.div)`
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  width: 300px;

  background-color: black;
  border: 2px solid ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 20;
  display: flex;
  flex-direction: column;

  span {
    margin: 5% auto;
  }
  div {
    margin: 5% auto;

    width: 90%;
    height: 15px;
    background-color: ${(props) => props.theme.fontColor};
    border: 1px solid ${(props) => props.theme.fontColor};
  }
`;

export default LoadBarStyled;
