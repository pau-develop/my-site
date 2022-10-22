import CanvasStyled from "../Canvas/CanvasStyled";
import { Unity, useUnityContext } from "react-unity-webgl";

interface GameMenuProps {
  action: (index: number) => void;
}

const GameMenu = ({ action }: GameMenuProps) => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build_web.loader.js",
    dataUrl: "/build_web.data",
    frameworkUrl: "/build_web.framework.js",
    codeUrl: "/build_web.wasm",
  });

  return (
    <CanvasStyled>
      <ul>
        <li onClick={() => action(0)} className="menu-wrap__big-item">
          Game List
        </li>
        <li className="menu-wrap__medium-item">KungFu Skate</li>
        <li>About</li>
        <li>How to Play</li>
        <li>Top Scores</li>
        <li>Play</li>
      </ul>
      <section className="menu-wrap__left-container">
        <Unity
          unityProvider={unityProvider}
          className="menu-wrap__unity-canvas"
        />
      </section>
    </CanvasStyled>
  );
};

export default GameMenu;
