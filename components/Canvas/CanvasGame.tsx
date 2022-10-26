import { useEffect, useRef, useState } from "react";
import {
  setPixelArray,
  getColorIndexes,
  changeTvColors,
  changeCanvasColors,
  setNewColors,
  turnOffTv,
} from "../../utils/functions";
import CanvasStyled from "./CanvasStyled";
import { tvLight, tvNoise } from "../../utils/colors";
import GameMenu from "../GameMenu/GameMenu";
import GameList from "../GameList/GameList";
import CanvasEdges from "./CanvasEdges";
import GameContent from "../GameContent/GameContent";

interface CanvasProps {
  image: string;
}

const CanvasGame = ({ image }: CanvasProps) => {
  const [tvNoiseColor, setTvNoiseColor] = useState(0);
  const [tvLightColor, setTvLightColor] = useState(0);
  const [tvDirection, setTvDirection] = useState(1);
  const [currentChildMenu, setCurrentChildMenu] = useState<number>(0);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const indexesTvNoise = useRef<Array<Array<number>>>();
  const indexesTvLight = useRef<Array<Array<number>>>();
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
      indexesTvNoise.current = getColorIndexes(pixels, tvNoise);
      indexesTvLight.current = getColorIndexes(pixels, tvLight);
      tvLightColors.current = setNewColors(tvLight, tvLight.length);
    };
  }, [image]);

  useEffect(() => {
    if (!menuVisibility) {
      const interval = setInterval(() => {
        setMenuVisibility(true);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [menuVisibility]);

  // TV LIGHT
  useEffect(() => {
    if (!menuVisibility) {
      const interval = setInterval(() => {
        if (tvLightColor === 3) setTvDirection(-1);
        if (tvLightColor === 1) setTvDirection(1);
        setTvLightColor(tvLightColor + tvDirection);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [tvLightColor, tvDirection, menuVisibility]);

  useEffect(() => {
    if (!menuVisibility) {
      if (indexesTvLight.current !== undefined) {
        changeCanvasColors(
          indexesTvLight.current as number[][],
          imageData.current as ImageData,
          contextRef.current as CanvasRenderingContext2D,
          tvLightColors.current as number[][][],
          tvLightColor
        );
      }
    } else {
      turnOffTv(
        indexesTvNoise.current!,
        indexesTvLight.current!,
        imageData.current!,
        contextRef.current!
      );
    }
  }, [tvLightColor, tvLightColors, menuVisibility]);

  //TV NOISE
  useEffect(() => {
    if (!menuVisibility) {
      const interval = setInterval(() => {
        if (tvNoiseColor === 2) setTvNoiseColor(0);
        else setTvNoiseColor(tvNoiseColor + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [tvNoiseColor, menuVisibility]);

  useEffect(() => {
    if (!menuVisibility) {
      if (indexesTvNoise.current !== undefined) {
        changeTvColors(
          indexesTvNoise.current!,
          imageData.current as ImageData,
          tvNoiseColor,
          contextRef.current!
        );
      }
    } else {
      turnOffTv(
        indexesTvNoise.current!,
        indexesTvLight.current!,
        imageData.current!,
        contextRef.current!
      );
    }
  }, [tvNoiseColor, menuVisibility]);

  const handleMenuClick = (index: number, action?: Promise<void>) => {
    action;
    setMenuVisibility(false);
  };

  const handleChildMenuClick = (index: number, action?: Promise<void>) => {
    action;
    setCurrentChildMenu(index);
    setMenuVisibility(false);
  };

  return (
    <CanvasStyled className="canvas-wrap">
      <CanvasEdges />
      <canvas
        className="canvas-wrap__canvas"
        ref={canvasRef}
        width={420}
        height={180}
        tabIndex={0}
      />

      {menuVisibility && (
        <>
          <GameList
            action={handleMenuClick}
            childAction={handleChildMenuClick}
          />

          <GameMenu
            action={handleMenuClick}
            childAction={handleChildMenuClick}
            childMenu={currentChildMenu}
          />
          <GameContent childMenu={currentChildMenu} />
        </>
      )}
    </CanvasStyled>
  );
};
export default CanvasGame;
