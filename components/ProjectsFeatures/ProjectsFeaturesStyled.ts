import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsFeaturesStyled = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: black;
  border: 1px solid rgb(95, 81, 255);
  .project-features {
    &__text {
      padding: 2%;
      height: 35%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-size: ${(props) => props.theme.fontSizeSmall};
        text-align: center;
        width: 100%;
        font-size: ${(props) => props.theme.fontSizeSmall};
        margin: 0;
      }
      p {
        font-size: ${(props) => props.theme.fontSizeSmall};
        line-height: 150%;
        text-align: center;
        width: 100%;
      }
    }
    &__menu {
      padding: 2%;
      height: 65%;
      width: 100%;
      display: flex;
      align-items: center;
      div {
        height: 100%;
        width: 90%;
        img {
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }
      button {
        width: 5%;
        height: 10%;
        color: ${(props) => props.theme.fontColor};
        background-color: transparent;
      }
      button:hover {
        cursor: pointer;
        animation: blink 0.1s infinite;
      }
    }
  }
  @keyframes blink {
    0% {
      color: ${(props) => props.theme.fontColor};
    }
    100% {
      color: white;
    }
  }
`;

export default ProjectsFeaturesStyled;
