import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { IUnityConfig, Unity, useUnityContext } from "react-unity-webgl";
import { IUnityProvider } from "react-unity-webgl/distribution/interfaces/unity-provider";
import GameDisplayStyled from "./GameDisplayStyled";
import { IGame, IScore } from "../../interfaces/Interfaces";
import LoadBar from "../LoadBar/LoadBar";

interface GameDisplayProps {
  game: IGame;
  unity: IUnityProvider;
  loader: number;
  loaded: boolean;
}

const GameDisplay = ({
  game,
  unity,
  loader,
  loaded,
}: GameDisplayProps): JSX.Element => {
  return (
    <GameDisplayStyled>
      {game.framework === "Unity" && (
        <>
          {loader !== 1 && <LoadBar loadingProgression={loader} />}
          <Unity unityProvider={unity} className="game-display__unity-canvas" />
        </>
      )}
      {game.framework === "Phaser" && (
        <iframe
          className="game-display__phaser-canvas"
          src="https://pau-dev-stone.netlify.app/"
        />
      )}
    </GameDisplayStyled>
  );
};

export default GameDisplay;
