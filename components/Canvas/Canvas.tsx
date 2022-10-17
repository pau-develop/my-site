import { useRef } from "react";
import CanvasStyled from "./CanvasStyled";

const Canvas = () => {
  const canvasRef = useRef();
  return (
    <CanvasStyled className="canvas-wrap">
      <canvas className="canvas-wrap__canvas" ref={canvasRef.current}></canvas>
    </CanvasStyled>
  );
};
export default Canvas;
