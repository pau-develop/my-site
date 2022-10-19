import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  setNewColors,
  changeCanvasColors,
} from "../../utils/colors/functions";
import CanvasStyled from "./CanvasStyled";

interface CanvasProps {
  image: string;
}

const Canvas = ({ image }: CanvasProps) => {
  const [laptopColor, setLaptopColor] = useState(0);
  const [direction, setDirection] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexes = useRef<Array<Array<number>>>();
  const laptopColors = useRef<Array<Array<Array<number>>>>();
  const imageData = useRef<ImageData>();

  useEffect(() => {
    const newImage = new Image();
    newImage.src = image;
    const canvas = canvasRef.current;
    contextRef.current = canvas!.getContext("2d");
    contextRef.current!.fillStyle = "#000";
    contextRef.current!.fillRect(
      0,
      0,
      contextRef.current!.canvas.width,
      contextRef.current!.canvas.height
    );

    newImage.onload = () => {
      contextRef.current!.drawImage(
        newImage,
        0,
        0,
        contextRef.current!.canvas.width,
        contextRef.current!.canvas.height
      );
      const imgData = contextRef.current!.getImageData(
        0,
        0,
        contextRef.current!.canvas.width,
        contextRef.current!.canvas.height
      );
      imageData.current = contextRef.current?.getImageData(
        0,
        0,
        canvas!.width,
        canvas!.height
      );
      const pixels = setPixelArray(imgData.data);
      indexes.current = getColorIndexes(pixels);
      laptopColors.current = setNewColors();
    };
  }, [image]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (laptopColor === 3) setDirection(-1);
      if (laptopColor === 1) setDirection(1);
      setLaptopColor(laptopColor + direction);
    }, 100);
    return () => clearInterval(interval);
  }, [laptopColor, direction]);

  useEffect(() => {
    if (indexes.current !== undefined) {
      changeCanvasColors(
        indexes.current as number[][],
        imageData.current as ImageData,
        contextRef.current as CanvasRenderingContext2D,
        laptopColors.current as number[][][],
        laptopColor
      );
    }
  }, [laptopColor]);

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
