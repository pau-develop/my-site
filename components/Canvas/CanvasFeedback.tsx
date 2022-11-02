import CanvasFeedbackStyled from "./CanvasFeedbackStyled";
import { useRef, useEffect, useState } from "react";
import {
  changeRouterLedColors,
  defineCanvasItemBounds,
  getColorIndexes,
  gettingMousePosition,
  setPixelArray,
} from "../../utils/functions";
import { powerLine } from "../../data/colors";
import { bounds } from "../../data/bounds";
import { useRouter } from "next/router";
interface CanvasFeedbackProps {
  action: () => void;
}

const CanvasFeedback = ({ action }: CanvasFeedbackProps) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageData = useRef<ImageData[]>(new Array(4));
  const indexes = useRef<Array<Array<Array<number>>>>(new Array(4));
  const imageRef = useRef<HTMLImageElement[]>();
  const [powerlineColor, setPowerlineColor] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const tvLine = new Image();
    const laptopLine = new Image();
    const notebookLine = new Image();
    const consoleLine = new Image();
    const paperLine = new Image();
    tvLine.src = "/feedback_tv.webp";
    laptopLine.src = "/feedback_lap.webp";
    notebookLine.src = "/feedback_note.webp";
    consoleLine.src = "/feedback_console.webp";
    paperLine.src = "/feedback_paper.webp";
    imageRef.current = [
      laptopLine,
      notebookLine,
      consoleLine,
      tvLine,
      paperLine,
    ];
    const canvas = canvasRef.current as HTMLCanvasElement;
    contextRef.current = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    let imagesLoaded = 0;
    for (const image of imageRef.current) {
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageRef.current!.length) drawAndGetData();
      };
    }
  }, []);
  //GET PIXEL DATA FOR EACH IMAGE
  const drawAndGetData = () => {
    for (let i = 0; i < imageRef.current!.length; i++) {
      contextRef.current!.drawImage(
        imageRef.current![i],
        0,
        0,
        contextRef.current!.canvas.width,
        contextRef.current!.canvas.height
      );
      imageData.current![i] = contextRef.current?.getImageData(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      ) as ImageData;

      const pixels = setPixelArray(imageData.current![i].data);
      indexes.current![i] = getColorIndexes(pixels, powerLine);
      contextRef.current!.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
    }
  };
  //CLEAR AND REDRAW
  useEffect(() => {
    if (indexes.current !== undefined && currentItem !== 0) {
      contextRef.current!.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
      contextRef.current!.drawImage(
        imageRef.current![currentItem - 1] as HTMLImageElement,
        0,
        0
      );
      changeRouterLedColors(
        indexes.current![currentItem - 1],
        imageData.current![currentItem - 1] as ImageData,
        powerlineColor,
        powerLine,
        contextRef.current as CanvasRenderingContext2D
      );
    }
  }, [indexes, powerlineColor, currentItem]);
  //CLEAR
  useEffect(() => {
    if (currentItem === 0)
      contextRef.current!.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
  }, [currentItem]);

  useEffect(() => {
    if (currentItem !== 0) {
      const interval = setInterval(() => {
        setPowerlineColor(!powerlineColor);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [powerlineColor, currentItem]);

  const handleMouseMovement = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const { mouseX, mouseY } = gettingMousePosition(event, canvasRef.current!);
    checkForItemBounds(mouseX, mouseY);
  };

  const checkForItemBounds = (mouseX: number, mouseY: number) => {
    if (contextRef.current !== null) {
      let currentItem = 0; //no item
      defineCanvasItemBounds(contextRef.current!, bounds.laptop);
      if (contextRef.current!.isPointInPath(mouseX, mouseY)) currentItem = 1;
      defineCanvasItemBounds(contextRef.current!, bounds.notebook);
      if (contextRef.current!.isPointInPath(mouseX, mouseY)) currentItem = 2;
      defineCanvasItemBounds(contextRef.current!, bounds.console);
      if (contextRef.current!.isPointInPath(mouseX, mouseY)) currentItem = 3;
      defineCanvasItemBounds(contextRef.current!, bounds.tv);
      if (contextRef.current!.isPointInPath(mouseX, mouseY)) currentItem = 4;
      defineCanvasItemBounds(contextRef.current!, bounds.paper);
      if (contextRef.current!.isPointInPath(mouseX, mouseY)) currentItem = 5;
      setCurrentItem(currentItem);
    }
  };

  const handleClick = () => {
    currentItem === 1 && action();
    currentItem === 2 && router.push("/projects");
    currentItem === 3 && router.push("/games");
    currentItem === 4 && router.push("/games");
    currentItem === 5 && router.push("/gallery");
  };

  return (
    <CanvasFeedbackStyled>
      <canvas
        ref={canvasRef}
        width={420}
        height={180}
        onMouseMove={(event) => handleMouseMovement(event)}
        onMouseDown={handleClick}
      />
    </CanvasFeedbackStyled>
  );
};

export default CanvasFeedback;
