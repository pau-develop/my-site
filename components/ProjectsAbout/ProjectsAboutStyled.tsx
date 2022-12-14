import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsAboutStyled = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: black;
  padding: 2%;
  border: 1px solid ${(props) => props.theme.fontColor};
  .projects-about {
    &__text-wrap {
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        font-size: ${(props) => props.theme.fontSizeSmall};
        line-height: 150%;
      }
    }
    &__list-wrap {
      font-size: ${(props) => props.theme.fontSizeSmall};
      height: 60%;
      display: flex;
      justify-content: space-between;
    }
    &__list-key {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 18%;
      li {
        line-height: 150%;
        flex: 1;
      }
    }
    &__list-value {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 80%;
      li {
        line-height: 150%;
        flex: 1;
        display: flex;
        flex-direction: column;
        a:-webkit-any-link {
          color: ${(props) => props.theme.fontColor};
          cursor: pointer;
          text-decoration: none;
        }
        a:hover {
          animation: blink 0.1s infinite;
        }
      }
    }
  }
  @keyframes blink {
    0% {
      color: ${(props) => props.theme.fontColor};
    }
    100% {
      color: rgb(200, 200, 250);
    }
  }
`;

export default ProjectsAboutStyled;
