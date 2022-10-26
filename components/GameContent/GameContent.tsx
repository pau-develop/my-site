import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useCallback } from "react";
import { IUnityProvider } from "react-unity-webgl/distribution/interfaces/unity-provider";
import GameAbout from "../GameAbout/GameAbout";
import GameHowTo from "../GameHowTo/GameHowTo";
import GameTopScores from "../GameTopScores/GameTopScores";
import GameContentStyled from "./GameContentStyled";
import IScore from "../../interfaces/Interfaces";

interface GameContentProps {
  childMenu: number;
  unity: IUnityProvider;
}

const GameContent = ({ childMenu, unity }: GameContentProps) => {
  return (
    <GameContentStyled className="game-content">
      {childMenu === 0 && <GameAbout />}
      {childMenu === 1 && <GameHowTo />}
      {childMenu === 2 && <GameTopScores />}
      {childMenu === 3 && (
        <Unity unityProvider={unity} className="game-content__unity-canvas" />
      )}
    </GameContentStyled>
  );
};

export default GameContent;
