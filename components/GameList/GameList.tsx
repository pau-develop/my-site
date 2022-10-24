import CanvasStyled from "../Canvas/CanvasStyled";
import GameListStyled from "./GameListStyled";

interface GameListProps {
  action: (index: number) => void;
}

const GameList = ({ action }: GameListProps) => {
  return (
    <GameListStyled className="menu-wrap">
      <ul className="menu-wrap__list">
        <li onClick={() => action(0)} className="menu-wrap__big-item">
          Game List
        </li>
        <li onClick={() => action(1)} className="menu-wrap__medium-item">
          KungFu Skate
        </li>
      </ul>
    </GameListStyled>
  );
};

export default GameList;
