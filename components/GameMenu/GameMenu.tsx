import CanvasStyled from "../Canvas/CanvasStyled";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import GameHowTo from "../GameHowTo/GameHowTo";
import GameTopScores from "../GameTopScores/GameTopScores";
import GameMenuStyled from "./GameMenuStyled";

interface GameMenuProps {
  action: (index: number, action: Promise<void>) => void;
  childAction: (index: number, action: Promise<void>) => void;
  childMenu: number;
}

const GameMenu = ({ action, childAction, childMenu }: GameMenuProps) => {
  const {
    unityProvider,
    unload,
    UNSAFE__unityInstance,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "/build_web.loader.js",
    dataUrl: "/build_web.data",
    frameworkUrl: "/build_web.framework.js",
    codeUrl: "/build_web.wasm",
  });
  const router = useRouter();
  const unloadUnityInstance = () => {
    UNSAFE__unityInstance !== null && unload();
  };
  router.events.on("routeChangeStart", unloadUnityInstance);

  const handleMenuClick = (index: number) => {
    childMenu === 4 && unload();
  };

  const handleGameOver = useCallback(
    (userName: string, points: number, player: number) => {
      console.log(userName, points, player);
    },
    []
  );

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  return (
    <GameMenuStyled className="game-menu">
      <ul className="game-menu__list">
        <li onClick={() => action(0, unload())} className="menu-wrap__big-item">
          Back to Game List
        </li>
        <li
          onClick={() => handleMenuClick(0)}
          className="menu-wrap__medium-item"
        >
          KungFu Skate
        </li>
        <li onClick={() => childAction(1, unload())}>About</li>
        <li onClick={() => childAction(2, unload())}>How to Play</li>
        <li onClick={() => childAction(3, unload())}>Top Scores</li>
        <li onClick={() => childAction(4, unload())}>Play</li>
      </ul>
      <section className="game-menu__left-container">
        {childMenu === 2 && <GameHowTo />}
        {childMenu === 3 && <GameTopScores />}

        {childMenu === 4 && (
          <Unity
            unityProvider={unityProvider}
            className="menu-wrap__unity-canvas"
          />
        )}
      </section>
    </GameMenuStyled>
  );
};

export default GameMenu;
