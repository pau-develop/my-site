import { useEffect, useRef } from "react";
import CanvasStyled from "./CanvasStyled";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const image = new Image();
    image.src = "/DESKTOP3.png";
    console.log(image);
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    context!.fillStyle = "#000000";
    context!.fillRect(0, 0, context!.canvas.width, context!.canvas.height);

    image.onload = () => {
      context!.drawImage(image, 0, 0, image.width, image.height);
    };
  }, []);

  return (
    <CanvasStyled className="canvas-wrap">
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
      />
    </CanvasStyled>
  );
};
export default Canvas;
