import CanvasStyled from "../Canvas/CanvasStyled";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import GameHowTo from "../GameHowTo/GameHowTo";
import GameTopScores from "../GameTopScores/GameTopScores";
import GameMenuStyled from "./GameMenuStyled";
import scoresProps from "../../interfaces/Interfaces";
import IScore from "../../interfaces/Interfaces";
import GameAbout from "../GameAbout/GameAbout";

interface GameMenuProps {
  action: (index: number) => void;
  childAction: (index: number) => void;
  childMenu: number;
  unloadAction: () => void;
  menuVisibility: boolean;
}

const GameMenu = ({
  action,
  childAction,
  childMenu,
  unloadAction,
  menuVisibility,
}: GameMenuProps) => {
  const handleGameOver = useCallback(
    (userName: string, score: number, player: number) => {
      const scoreObject: IScore = {
        name: userName,
        player: player,
        score: score,
      };
      addScore(scoreObject);
    },
    []
  );

  const addScore = async (score: IScore) => {
    const response = await fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify(score),
    });
  };

  return (
    <GameMenuStyled className="game-menu">
      <ul
        className={
          menuVisibility ? "game-menu__list" : "game-menu__list--disabled"
        }
      >
        <li
          className={
            childMenu === 0 || !menuVisibility
              ? "game-menu__list-item--current"
              : "game-menu__list-item"
          }
          onClick={() => {
            childAction(0);
            unloadAction();
          }}
        >
          About
        </li>
        <li
          className={
            childMenu === 1 || !menuVisibility
              ? "game-menu__list-item--current"
              : "game-menu__list-item"
          }
          onClick={() => {
            childAction(1);
            unloadAction();
          }}
        >
          How to Play
        </li>
        <li
          className={
            childMenu === 2 || !menuVisibility
              ? "game-menu__list-item--current"
              : "game-menu__list-item"
          }
          onClick={() => {
            childAction(2);
            unloadAction();
          }}
        >
          Top Scores
        </li>
        <li
          className={
            childMenu === 3 || !menuVisibility
              ? "game-menu__list-item--current"
              : "game-menu__list-item"
          }
          onClick={() => {
            childAction(3);
            unloadAction();
          }}
        >
          Play
        </li>
      </ul>
    </GameMenuStyled>
  );
};

export default GameMenu;
