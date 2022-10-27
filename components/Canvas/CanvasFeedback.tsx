import CanvasFeedbackStyled from "./CanvasFeedbackStyled";
import { useRef, useEffect, useState } from "react";
import {
  changeRouterLedColors,
  defineCanvasItemBounds,
  getColorIndexes,
  gettingMousePosition,
  setPixelArray,
} from "../../utils/functions";
import { powerLine } from "../../utils/colors";
import bounds from "../../utils/bounds";

const CanvasFeedback = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageData = useRef<ImageData>();
  const indexesPower = useRef<Array<Array<number>>>();
  const [powerlineColor, setPowerlineColor] = useState(true);

  useEffect(() => {
    const powerlineImage = new Image();
    powerlineImage.src = "/powerLine.png";
    const canvas = canvasRef.current;
    contextRef.current = canvas!.getContext("2d");
    powerlineImage.onload = () => {
      drawAndGetData(powerlineImage);
    };
  }, []);

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
    indexesPower.current = getColorIndexes(pixels, powerLine);
    defineCanvasItemBounds(contextRef.current!, bounds.laptop);
    defineCanvasItemBounds(contextRef.current!, bounds.notebook);
    defineCanvasItemBounds(contextRef.current!, bounds.console);
    defineCanvasItemBounds(contextRef.current!, bounds.tv);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPowerlineColor(!powerlineColor);
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, [powerlineColor]);

  // useEffect(() => {
  //   if (indexesPower.current !== undefined) {
  //     changeRouterLedColors(
  //       indexesPower.current!,
  //       imageData.current as ImageData,
  //       powerlineColor,
  //       powerLine,
  //       contextRef.current as CanvasRenderingContext2D
  //     );
  //   }
  // }, [indexesPower, powerlineColor]);

  const handleMouseMovement = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const { mouseX, mouseY } = gettingMousePosition(event, canvasRef.current!);
    checkForItemBounds(mouseX, mouseY);
  };

  const checkForItemBounds = (mouseX: number, mouseY: number) => {
    defineCanvasItemBounds(contextRef.current!, bounds.laptop);
    if (contextRef.current!.isPointInPath(mouseX, mouseY)) {
      console.log("LAPTOP");
    }
    defineCanvasItemBounds(contextRef.current!, bounds.notebook);
    if (contextRef.current!.isPointInPath(mouseX, mouseY)) {
      console.log("NOTE");
    }
    defineCanvasItemBounds(contextRef.current!, bounds.console);
    if (contextRef.current!.isPointInPath(mouseX, mouseY)) {
      console.log("CONS");
    }
    defineCanvasItemBounds(contextRef.current!, bounds.tv);
    if (contextRef.current!.isPointInPath(mouseX, mouseY)) {
      console.log("TV");
    }
  };

  return (
    <CanvasFeedbackStyled>
      <canvas
        ref={canvasRef}
        width={420}
        height={180}
        onMouseMove={(event) => handleMouseMovement(event)}
      />
    </CanvasFeedbackStyled>
  );
};

export default CanvasFeedback;
