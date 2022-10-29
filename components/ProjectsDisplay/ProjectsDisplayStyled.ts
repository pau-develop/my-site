import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsDisplayStyled = styled(motion.div)`
  height: 100%;
  width: 70%;
  color: rgb(95, 81, 255);
  border: 1px solid rgb(95, 81, 255);
  .project-display {
    &__title-wrap {
      padding: 0 5%;
      display: flex;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(95, 81, 255);
    }
    &__button-wrap {
      width: 30%;
      height: 100%;
      margin: 0;
      display: flex;
      button {
        width: 50%;
        height: 100%;
      }
    }
    &__title {
      width: 70%;
      margin: 0;
    }
    &__contents {
      padding: 2% 5%;
      height: 90%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__button {
      background-color: transparent;
      color: rgb(95, 81, 255);
    }
    &__button--disabled {
      background-color: transparent;
      color: rgb(95, 81, 255, 0.5);
    }
    &__button:hover {
      cursor: pointer;
      animation: blink 0.1s infinite;
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

export default ProjectsDisplayStyled;
