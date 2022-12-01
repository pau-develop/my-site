import { IGame } from "../../interfaces/Interfaces";
import GameAboutStyled from "./GameAboutStyled";

interface GameAboutProps {
  game: IGame;
}

const GameAbout = ({ game }: GameAboutProps) => {
  return (
    <GameAboutStyled className="about">
      <h2 className="about__title">About</h2>
      <p className="about__text">{game.about}</p>
    </GameAboutStyled>
  );
};

export default GameAbout;
