import styled from "styled-components";

const ProjectsFeaturesStyled = styled.div`
  height: 90%;
  width: 100%;
  .project-features {
    &__text {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        text-align: center;
        width: 100%;
        font-size: 1rem;
        margin: 0;
      }
      p {
        line-height: 150%;
        text-align: center;
        width: 100%;
        font-size: 0.8rem;
      }
    }
    &__menu {
      height: 60%;
      width: 100%;
      display: flex;
      align-items: center;
      div {
        height: 100%;
        width: 90%;
        img {
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
