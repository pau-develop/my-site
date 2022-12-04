import { IGame } from "../../interfaces/Interfaces";
import GameAboutStyled from "./GameAboutStyled";

interface GameAboutProps {
  game: IGame;
}

const GameAbout = ({ game }: GameAboutProps) => {
  return (
    <GameAboutStyled className="about">
      <h2 className="about__title">About</h2>
      <div className="about__images">
        <img src={game.images[0]} alt={game.title} />
        <img src={game.images[1]} alt={game.title} />
      </div>
      <p
        className="about__text"
        dangerouslySetInnerHTML={{ __html: game.about }}
      ></p>
    </GameAboutStyled>
  );
};

export default GameAbout;
