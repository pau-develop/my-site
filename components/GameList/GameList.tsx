import GameListStyled from "./GameListStyled";

interface GameListProps {
  action: (index: number) => void;
  childAction: (index: number) => void;
  unloadAction: () => void;
  gameName: string;
  handleClickList: (direction: number) => void;
}

const GameList = ({
  action,
  childAction,
  unloadAction,
  gameName,
  handleClickList,
}: GameListProps) => {
  return (
    <GameListStyled className="menu-wrap">
      <div className="menu-wrap__list">
        <h2>GAMES</h2>
        <div>
          <button onClick={() => handleClickList(-1)}>{`<<`}</button>
          <span className="menu-wrap__medium-item">{gameName}</span>
          <button onClick={() => handleClickList(+1)}>{`>>`}</button>
        </div>
      </div>
    </GameListStyled>
  );
};

export default GameList;
