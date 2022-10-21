import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  setNewColors,
  changeCanvasColors,
} from "../../utils/functions";
import CanvasStyled from "./CanvasStyled";
import {
  laptopRed,
  laptopOrange,
  laptopYellow,
  laptopGreen,
  laptopBlue,
  tvNoise,
  tvLight,
} from "../../utils/colors";

interface CanvasProps {
  image: string;
}

const Canvas = ({ image }: CanvasProps) => {
  const [laptopColor, setLaptopColor] = useState(0);
  const [tvNoiseColor, setTvNoiseColor] = useState(0);
  const [tvLightColor, setTvLightColor] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tvDirection, setTvDirection] = useState(1);
  const [currentLaptopColor, setCurrentLaptopColor] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesLaptop = useRef<Array<Array<number>>>();
  const indexesTvNoise = useRef<Array<Array<number>>>();
  const indexesTvLight = useRef<Array<Array<number>>>();
  const laptopColorsRed = useRef<Array<Array<Array<number>>>>();
  const laptopColorsOrange = useRef<Array<Array<Array<number>>>>();
  const laptopColorsYellow = useRef<Array<Array<Array<number>>>>();
  const laptopColorsGreen = useRef<Array<Array<Array<number>>>>();
  const laptopColorsBlue = useRef<Array<Array<Array<number>>>>();
  const tvLightColors = useRef<Array<Array<Array<number>>>>();
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
      indexesLaptop.current = getColorIndexes(pixels, laptopRed);
      indexesTvNoise.current = getColorIndexes(pixels, tvNoise);
      indexesTvLight.current = getColorIndexes(pixels, tvLight);
      indexesTvNoise.current = getColorIndexes(pixels, tvNoise);
      indexesTvLight.current = getColorIndexes(pixels, tvLight);
      laptopColorsRed.current = setNewColors(laptopRed, laptopRed.length);
      laptopColorsOrange.current = setNewColors(laptopOrange, laptopRed.length);
      laptopColorsYellow.current = setNewColors(laptopYellow, laptopRed.length);
      laptopColorsGreen.current = setNewColors(laptopGreen, laptopRed.length);
      laptopColorsBlue.current = setNewColors(laptopBlue, laptopRed.length);
      tvLightColors.current = setNewColors(tvLight, tvLight.length);
    };
  }, [image]);
  //LAPTOP
  useEffect(() => {
    const interval = setInterval(() => {
      if (laptopColor === 3) setDirection(-1);
      if (laptopColor === 1) setDirection(1);
      setLaptopColor(laptopColor + direction);
    }, 100);
    return () => clearInterval(interval);
  }, [laptopColor, direction]);

  useEffect(() => {
    if (indexesLaptop.current !== undefined) {
      const allLaptopColors = [
        laptopColorsRed.current,
        laptopColorsOrange.current,
        laptopColorsYellow.current,
        laptopColorsGreen.current,
        laptopColorsBlue.current,
      ];
      const currentColorInDisplay = allLaptopColors[currentLaptopColor];
      changeCanvasColors(
        indexesLaptop.current as number[][],
        imageData.current as ImageData,
        contextRef.current as CanvasRenderingContext2D,
        currentColorInDisplay as number[][][],
        laptopColor
      );
    }
  }, [laptopColor, currentLaptopColor]);

  // TV LIGHT
  useEffect(() => {
    const interval = setInterval(() => {
      if (tvLightColor === 3) setTvDirection(-1);
      if (tvLightColor === 1) setTvDirection(1);
      setTvLightColor(tvLightColor + tvDirection);
    }, 50);
    return () => clearInterval(interval);
  }, [tvLightColor, tvDirection]);

  useEffect(() => {
    if (indexesTvLight.current !== undefined) {
      changeCanvasColors(
        indexesTvLight.current as number[][],
        imageData.current as ImageData,
        contextRef.current as CanvasRenderingContext2D,
        tvLightColors.current as number[][][],
        tvLightColor
      );
    }
  }, [tvLightColor, tvLightColors]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLCanvasElement>) => {
    if (event.code === "Space") {
      if (currentLaptopColor < 4) setCurrentLaptopColor(currentLaptopColor + 1);
      else setCurrentLaptopColor(0);
    }
  };

  return (
    <CanvasStyled className="canvas-wrap">
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
        tabIndex={0}
        onKeyPress={(event) => handleKeyPress(event)}
      />
    </CanvasStyled>
  );
};
export default Canvas;
