import { IUnityConfig } from "react-unity-webgl";

export interface IScore {
  name: string;
  player: number;
  score: number;
}

export interface CanvasProps {
  image: string;
}

export interface IGalleryItem {
  name: string;
  resolution: string;
  source: string;
}

export interface IGame {
  title: string;
  about: string;
  howto: string[];
  topScores: boolean;
  framework: "Unity" | "Phaser";
  unityGame?: IUnityConfig;
  images: string[];
}
