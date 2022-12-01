import { IGame } from "../../interfaces/Interfaces";
import GameHowToStyled from "./GameHowToStyled";

interface GameHowToProps {
  game: IGame;
}

const GameHowTo = ({ game }: GameHowToProps) => {
  return (
    <GameHowToStyled className="how-to">
      <h2>How to Play</h2>

      <div className="how-to__contents">
        {game.howto.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </GameHowToStyled>
  );
};

export default GameHowTo;
