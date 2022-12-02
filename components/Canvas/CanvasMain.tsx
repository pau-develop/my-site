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
import { CanvasProps } from "../../interfaces/Interfaces";

const CanvasMain = ({ image }: CanvasProps) => {
  const [laptopColor, setLaptopColor] = useState(0);
  const [tvNoiseColor, setTvNoiseColor] = useState(0);
  const [tvLightColor, setTvLightColor] = useState(0);
  const [routerLedColor, setRouterLedColor] = useState(true);
  const [consoleLedColor, setConsoleLedColor] = useState(true);
  const [direction, setDirection] = useState(1);
  const [tvDirection, setTvDirection] = useState(1);
  const [currentLaptopColor, setCurrentLaptopColor] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesLaptop = useRef<Array<Array<number>>>();
  const indexesTvNoise = useRef<Array<Array<number>>>();
  const indexesTvLight = useRef<Array<Array<number>>>();
  const indexesRouterLed = useRef<Array<Array<number>>>();
  const indexesConsoleLed = useRef<Array<Array<number>>>();
  const laptopColorsRed = useRef<Array<Array<Array<number>>>>();
  const laptopColorsOrange = useRef<Array<Array<Array<number>>>>();
  const laptopColorsYellow = useRef<Array<Array<Array<number>>>>();
  const laptopColorsGreen = useRef<Array<Array<Array<number>>>>();
  const laptopColorsBlue = useRef<Array<Array<Array<number>>>>();
  const tvLightColors = useRef<Array<Array<Array<number>>>>();
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
    const canvas = canvasRef.current as HTMLCanvasElement;
    contextRef.current = canvas.getContext("2d", {
      willReadFrequently: true,
    });
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
    indexesTvNoise.current = getColorIndexes(pixels, tvNoise);
    indexesTvLight.current = getColorIndexes(pixels, tvLight);
    indexesRouterLed.current = getColorIndexes(pixels, routerLed);
    indexesConsoleLed.current = getColorIndexes(pixels, consoleLed);
    laptopColorsRed.current = setNewColors(laptopRed, laptopRed.length);
    laptopColorsOrange.current = setNewColors(laptopOrange, laptopRed.length);
    laptopColorsYellow.current = setNewColors(laptopYellow, laptopRed.length);
    laptopColorsGreen.current = setNewColors(laptopGreen, laptopRed.length);
    laptopColorsBlue.current = setNewColors(laptopBlue, laptopRed.length);
    tvLightColors.current = setNewColors(tvLight, tvLight.length);
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

  // TV LIGHT
  useEffect(() => {
    const interval = setInterval(() => {
      if (tvLightColor === 3) setTvDirection(-1);
      if (tvLightColor === 1) setTvDirection(1);
      setTvLightColor(tvLightColor + tvDirection);
    }, 50);
    return () => clearInterval(interval);
  }, [tvLightColor, tvDirection]);

  //TV NOISE
  useEffect(() => {
    const interval = setInterval(() => {
      if (tvNoiseColor === 2) setTvNoiseColor(0);
      else setTvNoiseColor(tvNoiseColor + 1);
    }, 75);

    return () => clearInterval(interval);
  }, [tvNoiseColor]);

  useEffect(() => {}, [tvNoiseColor]);

  //ROUTER
  useEffect(() => {
    const interval = setInterval(() => {
      setRouterLedColor(!routerLedColor);
    }, 500);

    return () => clearInterval(interval);
  }, [routerLedColor]);

  //CONSOLE
  useEffect(() => {
    const interval = setInterval(() => {
      setConsoleLedColor(!consoleLedColor);
    }, 200);

    return () => clearInterval(interval);
  }, [consoleLedColor]);

  useEffect(() => {
    if (indexesConsoleLed.current !== undefined) {
      changeRouterLedColors(
        indexesConsoleLed.current!,
        imageData.current as ImageData,
        consoleLedColor,
        consoleLed,
        contextRef.current as CanvasRenderingContext2D
      );
      changeRouterLedColors(
        indexesRouterLed.current!,
        imageData.current as ImageData,
        routerLedColor,
        routerLed,
        contextRef.current as CanvasRenderingContext2D
      );
      changeCanvasColors(
        indexesTvLight.current as number[][],
        imageData.current as ImageData,
        contextRef.current as CanvasRenderingContext2D,
        tvLightColors.current as number[][][],
        tvLightColor
      );
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
      changeTvColors(
        indexesTvNoise.current!,
        imageData.current as ImageData,
        tvNoiseColor,
        contextRef.current!
      );
    }
  }, [
    consoleLedColor,
    currentLaptopColor,
    laptopColor,
    routerLedColor,
    tvLightColor,
    tvNoiseColor,
  ]);

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
      transition={{ duration: 0.1 }}
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
      <CanvasFeedback action={changeThemeColor} />
    </CanvasStyled>
  );
};
export default CanvasMain;
