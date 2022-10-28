import { useRouter } from "next/router";
import { useUnityContext } from "react-unity-webgl";
import GameContent from "../GameContent/GameContent";
import GameList from "../GameList/GameList";
import GameMenu from "../GameMenu/GameMenu";
import { useCallback, useEffect } from "react";
import IScore from "../../interfaces/Interfaces";

interface CanvasGameMenuProps {
  menuVisibility: boolean;
  action: (index: number) => void;
  childAction: (index: number) => void;
  childMenu: number;
}

const CanvasGameMenu = ({
  menuVisibility,
  childMenu,
  action,
  childAction,
}: CanvasGameMenuProps) => {
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
    const response = await fetch("/api/scores", {
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
  {
    return (
      <>
        <GameList
          action={action}
          childAction={childAction}
          unloadAction={unloadUnity}
        />
        <GameMenu
          action={action}
          childAction={childAction}
          childMenu={childMenu}
          unloadAction={unloadUnity}
          menuVisibility={menuVisibility}
        />
        {menuVisibility && (
          <GameContent childMenu={childMenu} unity={unityProvider} />
        )}
      </>
    );
  }
};

export default CanvasGameMenu;
