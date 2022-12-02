import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsDisplayStyled = styled(motion.div)`
  position: absolute;
  height: 75%;
  width: 52.5%;
  right: 11%;
  color: ${(props) => props.theme.fontColor};

  .project-display {
    &__title-wrap {
      font-size: 0.75rem;
      padding: 0 4%;
      display: flex;
      height: 12%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__button-wrap {
      width: 35%;
      height: 60%;
      margin: 0;
      display: flex;
      justify-content: space-between;
      button {
        width: 45%;
        border: 1px solid ${(props) => props.theme.fontColor};
        background-color: black;
        padding: 0;
        height: 100%;
      }
    }
    &__title {
      border: 1px solid ${(props) => props.theme.fontColor};
      width: 40%;
      height: 60%;
      background-color: black;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__contents {
      padding: 4% 4%;
      height: 95%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__button {
      color: ${(props) => props.theme.fontColor};

      background-color: black;
    }
    &__button--disabled {
      color: ${(props) => props.theme.fontColorFade};
    }
    &__button:hover {
      cursor: pointer;
      animation: blink 0.1s infinite;
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

export default ProjectsDisplayStyled;
