import styled from "styled-components";

const ProjectsListStyled = styled.div`
  width: 25%;
  height: 85%;
  color: rgb(95, 81, 255);
  .projects-list {
    &__title {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5%;
      height: 10%;
      margin: 0;
      border: 1px solid rgb(95, 81, 255);
      text-align: center;
    }
    &__list {
      height: 90%;
      text-align: center;
      padding: 0;
      margin: 0;
    }
    &__list-item {
      background-color: black;
      height: 8%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(95, 81, 255);
      border-top: none;
    }
    &__list-item:hover {
      animation: blink 0.1s infinite;
    }
    &__list-item--current {
      background-color: black;
      height: 8%;
      border: 1px solid rgb(95, 81, 255);
      color: rgb(95, 81, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: none;
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

export default ProjectsListStyled;
