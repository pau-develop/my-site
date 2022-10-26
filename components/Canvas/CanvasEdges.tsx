import CanvasEdgesStyled from "./CanvasEdgesStyled";

const CanvasEdges = () => {
  return (
    <CanvasEdgesStyled className="canvas-edges">
      <div className="canvas-edges__top"></div>
      <div className="canvas-edges__bot"></div>
      <div className="canvas-edges__left"></div>
      <div className="canvas-edges__right"></div>
    </CanvasEdgesStyled>
  );
};

export default CanvasEdges;
