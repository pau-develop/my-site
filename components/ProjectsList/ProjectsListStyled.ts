import styled from "styled-components";

const ProjectsListStyled = styled.div`
  width: 25%;
  height: 85%;
  color: ${(props) => props.theme.fontColor};
  .projects-list {
    &__title {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5%;
      height: 10%;
      margin: 0;
      border: 1px solid ${(props) => props.theme.fontColor};
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
      border: 1px solid ${(props) => props.theme.fontColor};
      border-top: none;
    }
    &__list-item:hover {
      animation: blink 0.1s infinite;
    }
    &__list-item--current {
      background-color: black;
      height: 8%;
      border: 1px solid ${(props) => props.theme.fontColor};
      color: ${(props) => props.theme.fontColorFade};
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: none;
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

export default ProjectsListStyled;
