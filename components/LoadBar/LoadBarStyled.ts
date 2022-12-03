import styled from "styled-components";
import { motion } from "framer-motion";

const LoadBarStyled = styled(motion.div)`
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  width: 300px;
  height: 100px;
  background-color: black;
  border: 2px solid ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 20;
  display: flex;
  flex-direction: column;
  span {
    margin: auto auto;
  }
  div {
    margin: auto auto;
    width: 90%;
    height: 20%;
    background-color: ${(props) => props.theme.fontColor};
    border: 1px solid ${(props) => props.theme.fontColor};
  }
`;

export default LoadBarStyled;
