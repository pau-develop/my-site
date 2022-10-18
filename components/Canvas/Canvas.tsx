import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  setNewColors,
} from "../../utils/colors/functions";
import CanvasStyled from "./CanvasStyled";

interface CanvasProps {
  image: string;
}

const Canvas = ({ image }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = useRef<number[]>();
  const laptopColors = useRef<number[]>();

  useEffect(() => {
    const newImage = new Image();
    newImage.src = image;
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    context!.fillStyle = "#000";
    context!.fillRect(0, 0, context!.canvas.width, context!.canvas.height);

    newImage.onload = () => {
      context!.drawImage(
        newImage,
        0,
        0,
        context!.canvas.width,
        context!.canvas.height
      );
      const imgData = context!.getImageData(
        0,
        0,
        context!.canvas.width,
        context!.canvas.height
      );

      const pixels = setPixelArray(imgData.data);
      colors.current = getColorIndexes(pixels);
      laptopColors.current = setNewColors();
      console.log(laptopColors.current);
    };
  }, [image]);

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
