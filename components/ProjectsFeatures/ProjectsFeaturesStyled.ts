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
        font-size: 0.9rem;
        text-align: center;
        width: 100%;
        font-size: 1rem;
        margin: 0;
      }
      p {
        font-size: 0.7rem;
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
        color: rgb(95, 81, 255);
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
      color: rgb(95, 81, 255);
    }
    100% {
      color: white;
    }
  }
`;

export default ProjectsFeaturesStyled;
