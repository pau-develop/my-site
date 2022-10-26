import { Unity, useUnityContext } from "react-unity-webgl";
import GameAbout from "../GameAbout/GameAbout";
import GameHowTo from "../GameHowTo/GameHowTo";
import GameTopScores from "../GameTopScores/GameTopScores";
import GameContentStyled from "./GameContentStyled";

interface GameContentProps {
  childMenu: number;
}

const GameContent = ({ childMenu }: GameContentProps) => {
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

  return (
    <GameContentStyled className="game-content">
      {childMenu === 0 && <GameAbout />}
      {childMenu === 1 && <GameHowTo />}
      {childMenu === 2 && <GameTopScores />}
      {childMenu === 3 && (
        <Unity
          unityProvider={unityProvider}
          className="game-menu__unity-canvas"
        />
      )}
    </GameContentStyled>
  );
};

export default GameContent;
