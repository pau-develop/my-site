import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsAboutStyled = styled(motion.div)`
  height: 90%;
  width: 100%;
  .projects-about {
    &__text-wrap {
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        font-size: 0.8rem;
        line-height: 150%;
      }
    }
    &__list-wrap {
      font-size: 0.8rem;
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
          color: rgb(200, 200, 250);
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
      color: rgb(95, 81, 255);
    }
    100% {
      color: rgb(200, 200, 250);
    }
  }
`;

export default ProjectsAboutStyled;
