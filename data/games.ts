import { IUnityConfig } from "react-unity-webgl";
import { IGame } from "../interfaces/Interfaces";

const games: IGame[] = [
  {
    title: "Kungfu Skate",
    about: `Inspired by the Arcades of the 90's, an horizontally scrolling shooter written in cSharp using the <a href="https://unity.com/" target="_blank">Unity</a> framework</a>.`,
    howto: [
      " Use the W A S D keys to move the player.",
      "Press M to shoot ninja stars. Hold it down to shoot non-stop.",
      "Press N to use melee attack. Hold down N for two seconds and release to cast an energy wave.",
      "Press P to insert coin",
      "Press Space to Start",
    ],
    topScores: true,
    framework: "Unity",
    unityGame: {
      loaderUrl: "/build_web.loader.js",
      dataUrl: "/build_web.data",
      frameworkUrl: "/build_web.framework.js",
      codeUrl: "/build_web.wasm",
    },
  },
  {
    title: "Stone Age Runner",
    about: `Made in one month for the Github's November <a href="https://itch.io/jam/game-off-2022" target="_blank"> Game Off</a> 2022. Written in Typescript using the <a href="https://phaser.io/phaser3">Phaser 3</a> framework.`,
    howto: [
      "Press Space to jump. Hold it down to jump higher",
      "While on air, press and hold space to double jump",
      "Double jumping consumes energy",
      "Eat fruits to recover energy",
      "Avoid spikes, walls and monkeys",
    ],
    framework: "Phaser",
    topScores: false,
  },
];
export default games;
