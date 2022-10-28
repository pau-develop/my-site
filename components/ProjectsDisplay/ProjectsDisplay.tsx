import projects from "../../data/projects";
import ProjectsAbout from "../ProjectsAbout/ProjectsAbout";
import ProjectsDisplayStyled from "./ProjectsDisplayStyled";

interface ProjectDisplay {
  currentProject: number;
}

const ProjectsDisplay = ({ currentProject }: ProjectDisplay) => {
  return (
    <>
      {currentProject !== 0 && (
        <ProjectsDisplayStyled className="project-display">
          <h2 className="project-display__title">
            {projects[currentProject - 1].name}
          </h2>
          <div className="project-display__contents">
            <ProjectsAbout currentProject={currentProject} />
          </div>
        </ProjectsDisplayStyled>
      )}
    </>
  );
};

export default ProjectsDisplay;
