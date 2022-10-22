import CanvasStyled from "../Canvas/CanvasStyled";

interface GameListProps {
  action: (index: number) => void;
}

const GameList = ({ action }: GameListProps) => {
  return (
    <CanvasStyled>
      <ul>
        <li onClick={() => action(0)} className="menu-wrap__big-item">
          Game List
        </li>
        <li onClick={() => action(1)} className="menu-wrap__medium-item">
          KungFu Skate
        </li>
      </ul>
    </CanvasStyled>
  );
};

export default GameList;
