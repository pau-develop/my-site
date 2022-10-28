import ProjectsList from "../ProjectsList/ProjectsList";
import ProjectsStyled from "./ProjectsStyled";
import { useState } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <ProjectsStyled className="projects">
      <div className="projects__wrap">
        <ProjectsList currentProject={currentProject} />
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
