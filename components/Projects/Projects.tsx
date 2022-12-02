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
    <ProjectsStyled
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
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
