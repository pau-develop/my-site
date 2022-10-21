import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  changeTvColors,
} from "../../utils/functions";
import CanvasStyled from "./CanvasStyled";
import { tvNoise } from "../../utils/colors";

interface CanvasProps {
  image: string;
}

const CanvasGame = ({ image }: CanvasProps) => {
  const [tvNoiseColor, setTvNoiseColor] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesTvNoise = useRef<Array<Array<number>>>();
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
      indexesTvNoise.current = getColorIndexes(pixels, tvNoise);
    };
  }, [image]);

  //TV NOISE
  useEffect(() => {
    const interval = setInterval(() => {
      if (tvNoiseColor === 2) setTvNoiseColor(0);
      else setTvNoiseColor(tvNoiseColor + 1);
    }, 75);

    return () => clearInterval(interval);
  }, [tvNoiseColor]);

  useEffect(() => {
    if (indexesTvNoise.current !== undefined) {
      changeTvColors(
        indexesTvNoise.current!,
        imageData.current as ImageData,
        tvNoiseColor,
        contextRef.current!
      );
    }
  }, [tvNoiseColor]);

  return (
    <CanvasStyled className="canvas-wrap">
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
        tabIndex={0}
      />
    </CanvasStyled>
  );
};
export default CanvasGame;
