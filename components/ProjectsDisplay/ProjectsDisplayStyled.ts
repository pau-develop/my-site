import styled from "styled-components";

const ProjectsDisplayStyled = styled.div`
  height: 100%;
  width: 70%;
  color: rgb(95, 81, 255);
  border: 1px solid rgb(95, 81, 255);
  .project-display {
    &__title {
      margin: 0;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgb(95, 81, 255);
    }
    &__contents {
      padding: 5%;
      height: 90%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__button-wrap {
      margin: auto auto;
      height: 10%;
      width: 60%;
      display: flex;
      justify-content: space-around;
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
