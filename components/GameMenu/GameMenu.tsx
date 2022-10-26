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
}

const GameMenu = ({
  action,
  childAction,
  childMenu,
  unloadAction,
}: GameMenuProps) => {
  const handleGameOver = useCallback(
    (userName: string, score: number, player: number) => {
      const scoreObject: IScore = {
        name: userName,
        player: player.toString(),
        score: score.toString(),
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

  // useEffect(
  //   function () {
  //     addEventListener("GameOver", handleGameOver);
  //     return () => {
  //       removeEventListener("GameOver", handleGameOver);
  //     };
  //   },
  //   [addEventListener, removeEventListener, handleGameOver]
  // );

  return (
    <GameMenuStyled className="game-menu">
      <ul className="game-menu__list">
        <li
          onClick={() => {
            childAction(0);
            unloadAction();
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            childAction(1);
            unloadAction();
          }}
        >
          How to Play
        </li>
        <li
          onClick={() => {
            childAction(2);
            unloadAction();
          }}
        >
          Top Scores
        </li>
        <li
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
