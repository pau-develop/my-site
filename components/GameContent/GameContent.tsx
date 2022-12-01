import { Unity } from "react-unity-webgl";
import { IUnityProvider } from "react-unity-webgl/distribution/interfaces/unity-provider";
import { IGame } from "../../interfaces/Interfaces";
import GameAbout from "../GameAbout/GameAbout";
import GameDisplay from "../GameDisplay/GameDisplay";
import GameHowTo from "../GameHowTo/GameHowTo";
import GameTopScores from "../GameTopScores/GameTopScores";
import GameContentStyled from "./GameContentStyled";

interface GameContentProps {
  childMenu: number;
  unity: IUnityProvider;
  game: IGame;
}

const GameContent = ({ childMenu, unity, game }: GameContentProps) => {
  return (
    <GameContentStyled className="game-content">
      {childMenu === 0 && <GameAbout game={game} />}
      {childMenu === 1 && <GameHowTo game={game} />}
      {childMenu === 2 && <GameTopScores />}
      {childMenu === 3 && <GameDisplay game={game} unity={unity} />}
    </GameContentStyled>
  );
};

export default GameContent;
