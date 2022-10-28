import projects from "../../data/projects";
import ProjectsAboutStyled from "./ProjectsAboutStyled";

interface ProjectsAboutProps {
  currentProject: number;
}

const ProjectsAbout = ({ currentProject }: ProjectsAboutProps) => {
  return (
    <ProjectsAboutStyled className="projects-about">
      <div className="projects-about__text-wrap">
        <p>{projects[currentProject - 1].about}</p>
      </div>
      <div className="projects-about__list-wrap">
        <ul className="projects-about__list-key">
          <li>Site:</li>
          <li>Source:</li>
          <li>Stack:</li>
        </ul>
        <ul className="projects-about__list-value">
          <li>
            <a
              href={projects[currentProject - 1].prodLink}
              target="_blank"
              rel="noreferrer"
            >
              {projects[currentProject - 1].prodName}
            </a>
          </li>
          <li>
            <a
              href={projects[currentProject - 1].gitLink}
              target="_blank"
              rel="noreferrer"
            >
              {projects[currentProject - 1].gitName}
            </a>
            <a
              href={projects[currentProject - 1].gitBackLink}
              target="_blank"
              rel="noreferrer"
            >
              {projects[currentProject - 1].gitBackName}
            </a>
          </li>
          <li>{projects[currentProject - 1].stack}</li>
        </ul>
      </div>
    </ProjectsAboutStyled>
  );
};

export default ProjectsAbout;
