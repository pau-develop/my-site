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
}

const GameMenu = ({ action, childAction, childMenu }: GameMenuProps) => {
  // const router = useRouter();
  // const unloadUnityInstance = () => {
  //   UNSAFE__unityInstance !== null && unload();
  // };
  // router.events.on("routeChangeStart", unloadUnityInstance);

  const handleMenuClick = (index: number) => {
    // childMenu === 4 && unload();
  };

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
        <li onClick={() => action(0)} className="menu-wrap__big-item">
          Back to Game List
        </li>

        <li onClick={() => childAction(0)}>
          <img src="/KUNG_LOGO.png" alt="Kungfu Skate logo" />
        </li>
        <li onClick={() => childAction(1)}>How to Play</li>
        <li onClick={() => childAction(2)}>Top Scores</li>
        <li onClick={() => childAction(3)}>Play</li>
      </ul>
    </GameMenuStyled>
  );
};

export default GameMenu;
