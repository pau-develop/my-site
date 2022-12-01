import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Unity, useUnityContext } from "react-unity-webgl";
import { IUnityProvider } from "react-unity-webgl/distribution/interfaces/unity-provider";
import GameDisplayStyled from "./GameDisplayStyled";
import { IScore } from "../../interfaces/Interfaces";

interface GameDisplayProps {
  unity: IUnityProvider;
}

const GameDisplay = ({ unity }: GameDisplayProps): JSX.Element => {
  return (
    <GameDisplayStyled>
      <Unity unityProvider={unity} className="game-content__unity-canvas" />
    </GameDisplayStyled>
  );
};

export default GameDisplay;
