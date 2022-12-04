import { useContext, useEffect, useRef, useState, useCallback } from "react";
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
  laptopGreen,
  laptopBlue,
} from "../../data/colors";
import CanvasEdges from "./CanvasEdges";
import Projects from "../Projects/Projects";
import { useRouter } from "next/router";
import Gallery from "../Gallery/Gallery";
import { changeStateAction, Context } from "../../context/ContextProvider";

interface CanvasProps {
  image: string;
}

const CanvasProjectsGallery = ({ image }: CanvasProps) => {
  const { dispatch, state } = useContext(Context);
  const router = useRouter();
  const [laptopColor, setLaptopColor] = useState(0);
  const [direction, setDirection] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesLaptop = useRef<Array<Array<number>>>();
  const laptopColorsRed = useRef<Array<Array<Array<number>>>>();
  const laptopColorsOrange = useRef<Array<Array<Array<number>>>>();
  const laptopColorsGreen = useRef<Array<Array<Array<number>>>>();
  const laptopColorsBlue = useRef<Array<Array<Array<number>>>>();
  const imageData = useRef<ImageData>();

  const drawAndGetData = useCallback(
    (image: HTMLImageElement) => {
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
      laptopColorsGreen.current = setNewColors(laptopGreen, laptopRed.length);
      laptopColorsBlue.current = setNewColors(laptopBlue, laptopRed.length);
      //after drawing image and getting pixel data, set isLoading to false
      //this funciton only runs on the first render after changing routes
      dispatch(changeStateAction({ ...state, isLoading: false }));
    },
    [dispatch, state]
  );

  useEffect(() => {
    const deskImage = new Image();
    deskImage.src = image;
    const canvas = canvasRef.current;
    contextRef.current = canvas!.getContext("2d", {
      willReadFrequently: true,
    });
    //drawing image and getting pixel data only if canvas is empty
    if (canvasRef.current!.toDataURL().length < 3000) {
      deskImage.onload = () => {
        drawAndGetData(deskImage);
      };
    }
  }, [image, drawAndGetData]);

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
        laptopColorsGreen.current,
        laptopColorsBlue.current,
      ];
      const currentColorInDisplay = allLaptopColors[state.theme];
      changeCanvasColors(
        indexesLaptop.current as number[][],
        imageData.current as ImageData,
        contextRef.current as CanvasRenderingContext2D,
        currentColorInDisplay as number[][][],
        laptopColor
      );
    }
  }, [state.theme, laptopColor]);

  return (
    <CanvasStyled
      className="canvas-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {/* <CanvasEdges /> */}
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
        tabIndex={0}
      />
      {router.pathname === "/projects" && <Projects />}
      {router.pathname === "/gallery" && <Gallery />}
    </CanvasStyled>
  );
};
export default CanvasProjectsGallery;
