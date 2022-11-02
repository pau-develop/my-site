import Projects from "../components/Projects/Projects";
import CanvasProjectsGallery from "../components/Canvas/CanvasProjectsGallery";

const projects = (): JSX.Element => {
  return (
    <>
      <CanvasProjectsGallery image={"/NOTEBOOK.png"} />
    </>
  );
};

export default projects;
