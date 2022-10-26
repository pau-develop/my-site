import { useRouter } from "next/router";
import { useUnityContext } from "react-unity-webgl";
import GameContent from "../GameContent/GameContent";
import GameList from "../GameList/GameList";
import GameMenu from "../GameMenu/GameMenu";

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
  router.events.on("routeChangeStart", unloadUnityInstance);

  const unloadUnity = () => {
    unload();
  };
  {
    return (
      <>
        {menuVisibility && (
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
            />
            <GameContent childMenu={childMenu} unity={unityProvider} />
          </>
        )}
      </>
    );
  }
};

export default CanvasGameMenu;
