import CanvasStyled from "../Canvas/CanvasStyled";
import GameListStyled from "./GameListStyled";

interface GameListProps {
  action: (index: number) => void;
  childAction: (index: number) => void;
  unloadAction: () => void;
}

const GameList = ({ action, childAction, unloadAction }: GameListProps) => {
  const handleClick = () => {};

  return (
    <GameListStyled className="menu-wrap">
      <div className="menu-wrap__list">
        <h2>GAMES</h2>
        <ul>
          <li
            onClick={() => {
              action(1);
              childAction(0);
              unloadAction();
            }}
            className="menu-wrap__medium-item"
          >
            KungFu Skate
          </li>
        </ul>
      </div>
    </GameListStyled>
  );
};

export default GameList;
