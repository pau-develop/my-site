import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { IUnityConfig, Unity, useUnityContext } from "react-unity-webgl";
import { IUnityProvider } from "react-unity-webgl/distribution/interfaces/unity-provider";
import GameDisplayStyled from "./GameDisplayStyled";
import { IGame, IScore } from "../../interfaces/Interfaces";

interface GameDisplayProps {
  game: IGame;
  unity: IUnityProvider;
}

const GameDisplay = ({ game, unity }: GameDisplayProps): JSX.Element => {
  return (
    <GameDisplayStyled>
      {game.framework === "Unity" && (
        <Unity unityProvider={unity} className="game-display__unity-canvas" />
      )}
      {game.framework === "Phaser" && (
        <iframe
          className="game-display__phaser-canvas"
          src="https://pau-dev-stone.netlify.app/"
        ></iframe>
      )}
    </GameDisplayStyled>
  );
};

export default GameDisplay;
