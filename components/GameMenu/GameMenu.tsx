import CanvasStyled from "../Canvas/CanvasStyled";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface GameMenuProps {
  action: (index: number, action: Promise<void>) => void;
}

const GameMenu = ({ action }: GameMenuProps) => {
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const { unityProvider, unload, UNSAFE__unityInstance } = useUnityContext({
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
    currentMenu === 4 && unload();
    setCurrentMenu(index);
  };

  return (
    <CanvasStyled>
      <ul>
        <li onClick={() => action(0, unload())} className="menu-wrap__big-item">
          Game List
        </li>
        <li
          onClick={() => handleMenuClick(0)}
          className="menu-wrap__medium-item"
        >
          KungFu Skate
        </li>
        <li onClick={() => handleMenuClick(1)}>About</li>
        <li onClick={() => handleMenuClick(2)}>How to Play</li>
        <li onClick={() => handleMenuClick(3)}>Top Scores</li>
        <li onClick={() => handleMenuClick(4)}>Play</li>
      </ul>
      <section className="menu-wrap__left-container">
        {currentMenu === 4 && (
          <Unity
            unityProvider={unityProvider}
            className="menu-wrap__unity-canvas"
          />
        )}
      </section>
    </CanvasStyled>
  );
};

export default GameMenu;
