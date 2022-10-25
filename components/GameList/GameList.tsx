import CanvasStyled from "../Canvas/CanvasStyled";
import GameListStyled from "./GameListStyled";

interface GameListProps {
  action: (index: number) => void;
  childAction: (index: number) => void;
}

const GameList = ({ action, childAction }: GameListProps) => {
  const handleClick = () => {};

  return (
    <GameListStyled className="menu-wrap">
      <ul className="menu-wrap__list">
        <li className="menu-wrap__big-item">Game List</li>
        <li
          onClick={() => {
            action(1);
            childAction(0);
          }}
          className="menu-wrap__medium-item"
        >
          <img src="/KUNG_LOGO.png" alt="Kungfu Skate logo" />
        </li>
      </ul>
    </GameListStyled>
  );
};

export default GameList;
