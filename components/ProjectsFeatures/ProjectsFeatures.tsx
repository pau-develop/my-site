import projects from "../../data/projects";
import ProjectsFeaturesStyled from "./ProjectsFeaturesStyled";
import { useState } from "react";

interface ProjectsFeaturesProps {
  currentProject: number;
}

const ProjectsFeatures = ({ currentProject }: ProjectsFeaturesProps) => {
  const [featureMenu, setFeatureMenu] = useState(0);

  const handleClickAscending = () => {
    featureMenu < projects[currentProject - 1].features.length - 1
      ? setFeatureMenu(featureMenu + 1)
      : setFeatureMenu(0);
  };
  const handleClickDescending = () => {
    featureMenu > 0
      ? setFeatureMenu(featureMenu - 1)
      : setFeatureMenu(projects[currentProject - 1].features.length - 1);
  };

  return (
    <ProjectsFeaturesStyled
      className="project-features"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="project-features__text">
        <h3>{projects[currentProject - 1].features[featureMenu].title}</h3>
        <p>{projects[currentProject - 1].features[featureMenu].text}</p>
      </div>
      <div className="project-features__menu">
        <button onClick={handleClickDescending}>{"<<"}</button>
        <div>
          <img
            src={projects[currentProject - 1].features[featureMenu].img}
            alt={projects[currentProject - 1].features[featureMenu].alt}
          />
        </div>
        <button onClick={handleClickAscending}>{">>"}</button>
      </div>
    </ProjectsFeaturesStyled>
  );
};

export default ProjectsFeatures;
