import styled from "styled-components";

const ProjectsDisplayStyled = styled.div`
  height: 100%;
  width: 70%;
  color: rgb(95, 81, 255);
  border: 1px solid rgb(95, 81, 255);
  .project-display {
    &__title {
      margin: 0;
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__contents {
      padding: 5%;
      height: 92%;
      width: 100%;
    }
  }
`;

export default ProjectsDisplayStyled;
