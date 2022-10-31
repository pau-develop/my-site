import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  setNewColors,
  changeCanvasColors,
  changeTvColors,
  changeRouterLedColors,
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
  routerLed,
  consoleLed,
} from "../../data/colors";
import CanvasEdges from "./CanvasEdges";
import CanvasFeedback from "./CanvasFeedback";
import Projects from "../Projects/Projects";

interface CanvasProps {
  image: string;
}

const Canvas = ({ image }: CanvasProps) => {
  const [laptopColor, setLaptopColor] = useState(0);
  const [direction, setDirection] = useState(1);
  const [currentLaptopColor, setCurrentLaptopColor] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesLaptop = useRef<Array<Array<number>>>();
  const laptopColorsRed = useRef<Array<Array<Array<number>>>>();
  const laptopColorsOrange = useRef<Array<Array<Array<number>>>>();
  const laptopColorsYellow = useRef<Array<Array<Array<number>>>>();
  const laptopColorsGreen = useRef<Array<Array<Array<number>>>>();
  const laptopColorsBlue = useRef<Array<Array<Array<number>>>>();
  const imageData = useRef<ImageData>();

  useEffect(() => {
    if (localStorage.getItem("currentColor") !== undefined) {
      const color = Number(localStorage.getItem("currentColor"));
      setCurrentLaptopColor(color);
    }
  }, []);

  useEffect(() => {
    const deskImage = new Image();
    deskImage.src = image;
    const canvas = canvasRef.current;
    contextRef.current = canvas!.getContext("2d");
    contextRef.current!.fillStyle = "#000";
    contextRef.current!.fillRect(
      0,
      0,
      contextRef.current!.canvas.width,
      contextRef.current!.canvas.height
    );

    deskImage.onload = () => {
      drawAndGetData(deskImage);
    };
  }, [image]);

  const drawAndGetData = (image: HTMLImageElement) => {
    contextRef.current!.drawImage(
      image,
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
      canvasRef.current!.width,
      canvasRef.current!.height
    );
    const pixels = setPixelArray(imgData.data);
    indexesLaptop.current = getColorIndexes(pixels, laptopRed);
    laptopColorsRed.current = setNewColors(laptopRed, laptopRed.length);
    laptopColorsOrange.current = setNewColors(laptopOrange, laptopRed.length);
    laptopColorsYellow.current = setNewColors(laptopYellow, laptopRed.length);
    laptopColorsGreen.current = setNewColors(laptopGreen, laptopRed.length);
    laptopColorsBlue.current = setNewColors(laptopBlue, laptopRed.length);
  };

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
  }, [currentLaptopColor, laptopColor]);

  const changeThemeColor = () => {
    if (currentLaptopColor < 4) {
      const color = currentLaptopColor + 1;
      localStorage.setItem("currentColor", color.toString());
      setCurrentLaptopColor(color);
    } else {
      const color = 0;
      localStorage.setItem("currentColor", color.toString());
      setCurrentLaptopColor(color);
    }
  };

  return (
    <CanvasStyled
      className="canvas-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <CanvasEdges />
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
        tabIndex={0}
      />
      <Projects />
    </CanvasStyled>
  );
};
export default Canvas;
