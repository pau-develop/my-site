import styled from "styled-components";

const ProjectsListStyled = styled.div`
  width: 25%;
  height: 100%;
  color: rgb(95, 81, 255);
  .projects-list {
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5%;
      height: 80px;
      margin: 0;
      border: 1px solid rgb(95, 81, 255);
      text-align: center;
    }
    &__list {
      text-align: center;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &__list-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      border: 1px solid rgb(95, 81, 255);
      border-top: none;
    }
    &__list-item:hover {
      animation: blink 0.1s infinite;
    }
    &__list-item--current {
      border: 1px solid rgb(95, 81, 255);
      color: rgb(95, 81, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
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
