import ProjectsList from "../ProjectsList/ProjectsList";
import ProjectsStyled from "./ProjectsStyled";
import { useState } from "react";
import ProjectsDisplay from "../ProjectsDisplay/ProjectsDisplay";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleMenuClick = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <ProjectsStyled className="projects">
      <div className="projects__wrap">
        <ProjectsList
          currentProject={currentProject}
          action={handleMenuClick}
        />
        <ProjectsDisplay currentProject={currentProject} />
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
