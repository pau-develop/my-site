import styled from "styled-components";

const ProjectsAboutStyled = styled.div`
  height: 100%;
  width: 100%;
  .projects-about {
    &__text-wrap {
      height: 50%;
      p {
        font-size: 0.8rem;
        line-height: 150%;
      }
    }
    &__list-wrap {
      font-size: 0.8rem;
      height: 50%;
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
      }
    }
  }
`;

export default ProjectsAboutStyled;
