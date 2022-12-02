import projects from "../../data/projects";
import ProjectsAbout from "../ProjectsAbout/ProjectsAbout";
import ProjectsDisplayStyled from "./ProjectsDisplayStyled";
import { useState } from "react";
import ProjectsFeatures from "../ProjectsFeatures/ProjectsFeatures";

interface ProjectDisplay {
  currentProject: number;
}

const ProjectsDisplay = ({ currentProject }: ProjectDisplay) => {
  const [childMenu, setChildMenu] = useState(0);

  const handleClick = () => {
    childMenu === 0 && setChildMenu(1);
    childMenu === 1 && setChildMenu(0);
  };

  return (
    <>
      {currentProject !== 0 && (
        <ProjectsDisplayStyled
          className="project-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div className="project-display__title-wrap">
            <h2 className="project-display__title">
              {projects[currentProject - 1].name}
            </h2>
            <div className="project-display__button-wrap">
              <button
                onClick={handleClick}
                className={
                  childMenu === 0
                    ? "project-display__button--disabled"
                    : "project-display__button"
                }
              >
                About
              </button>
              <button
                onClick={handleClick}
                className={
                  childMenu === 1
                    ? "project-display__button--disabled"
                    : "project-display__button"
                }
              >
                Features
              </button>
            </div>
          </div>

          <div className="project-display__contents">
            {childMenu === 0 ? (
              <ProjectsAbout currentProject={currentProject} />
            ) : (
              <ProjectsFeatures currentProject={currentProject} />
            )}
          </div>
        </ProjectsDisplayStyled>
      )}
    </>
  );
};

export default ProjectsDisplay;
