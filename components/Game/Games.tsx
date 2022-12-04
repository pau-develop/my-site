import { useState } from "react";
import { useRouter } from "next/router";
import { IUnityConfig, useUnityContext } from "react-unity-webgl";
import GameContent from "../GameContent/GameContent";
import GameList from "../GameList/GameList";
import GameMenu from "../GameMenu/GameMenu";
import { useCallback, useEffect } from "react";
import { IScore } from "../../interfaces/Interfaces";
import games from "../../data/games";

interface CanvasGameMenuProps {
  menuVisibility: boolean;
  action: (index: number) => void;
  childAction: (index: number) => void;
  childMenu: number;
}

const Game = ({
  menuVisibility,
  childMenu,
  action,
  childAction,
}: CanvasGameMenuProps) => {
  const [currentGame, setCurrentGame] = useState(0);
  const unityFiles: IUnityConfig =
    games[currentGame].framework === "Unity"
      ? (games[currentGame].unityGame as IUnityConfig)
      : (games[0].unityGame as IUnityConfig);
  const {
    loadingProgression,
    unityProvider,
    unload,
    UNSAFE__unityInstance,
    addEventListener,
    removeEventListener,
    isLoaded,
  } = useUnityContext(unityFiles);

  const router = useRouter();
  const unloadUnityInstance = () => {
    UNSAFE__unityInstance !== null && unload();
  };
  if (router.events !== undefined) {
    router.events.on("routeChangeStart", unloadUnityInstance);
  }

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
    await fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify(score),
    });
  };
  useEffect(
    function () {
      addEventListener("GameOver", handleGameOver);
      return () => {
        removeEventListener("GameOver", handleGameOver);
      };
    },
    [addEventListener, removeEventListener, handleGameOver]
  );
  const unloadUnity = () => {
    unload();
  };

  const handleListClick = (direction: number) => {
    if (direction === 1 && currentGame === games.length - 1) {
      setCurrentGame(0);
      childAction(0);
      unloadUnity();
      return;
    } else setCurrentGame(currentGame + direction);
    if (direction === -1 && currentGame === 0) setCurrentGame(games.length - 1);
    else setCurrentGame(currentGame + direction);
    childAction(0);
    unloadUnity();
  };

  {
    return (
      <>
        <GameList
          action={action}
          childAction={childAction}
          unloadAction={unloadUnity}
          gameName={games[currentGame].title}
          handleClickList={handleListClick}
        />
        <GameMenu
          action={action}
          childAction={childAction}
          childMenu={childMenu}
          unloadAction={unloadUnity}
          menuVisibility={menuVisibility}
          game={games[currentGame]}
        />
        {menuVisibility && (
          <GameContent
            childMenu={childMenu}
            unity={unityProvider}
            loader={loadingProgression}
            loaded={isLoaded}
            game={games[currentGame]}
          />
        )}
      </>
    );
  }
};

export default Game;
