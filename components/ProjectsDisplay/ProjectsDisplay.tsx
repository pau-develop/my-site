import projects from "../../data/projects";
import ProjectsAbout from "../ProjectsAbout/ProjectsAbout";
import ProjectsDisplayStyled from "./ProjectsDisplayStyled";
import { useState } from "react";

interface ProjectDisplay {
  currentProject: number;
}

const ProjectsDisplay = ({ currentProject }: ProjectDisplay) => {
  const [childMenu, setChildMenu] = useState(0);
  return (
    <>
      {currentProject !== 0 && (
        <ProjectsDisplayStyled className="project-display">
          <h2 className="project-display__title">
            {projects[currentProject - 1].name}
          </h2>
          <div className="project-display__contents">
            <div className="project-display__button-wrap">
              <button
                className={
                  childMenu === 0
                    ? "project-display__button--disabled"
                    : "project-display__button"
                }
              >
                About
              </button>
              <button
                className={
                  childMenu === 1
                    ? "project-display__button--disabled"
                    : "project-display__button"
                }
              >
                Features
              </button>
            </div>
            {childMenu === 0 ? (
              <ProjectsAbout currentProject={currentProject} />
            ) : null}
          </div>
        </ProjectsDisplayStyled>
      )}
    </>
  );
};

export default ProjectsDisplay;
