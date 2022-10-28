import ProjectsListStyled from "./ProjectsListStyled";

interface ProjectsListProps {
  currentProject: number;
}

const ProjectsList = ({ currentProject }: ProjectsListProps) => {
  return (
    <ProjectsListStyled className="projects-list">
      <h2 className="projects-list__title">PROJECTS</h2>
      <ul className="projects-list__list">
        <li
          className={
            currentProject === 1
              ? "projects-list__list-item--current"
              : "projects-list__list-item"
          }
        >
          Pixel-junkyard
        </li>
      </ul>
    </ProjectsListStyled>
  );
};

export default ProjectsList;
