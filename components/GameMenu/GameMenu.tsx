import CanvasStyled from "../Canvas/CanvasStyled";

interface GameMenuProps {
  action: (index: number) => void;
}

const GameMenu = ({ action }: GameMenuProps) => {
  return (
    <CanvasStyled>
      <ul>
        <li onClick={() => action(0)} className="canvas-wrap__big-item">
          Game List
        </li>
        <li className="canvas-wrap__medium-item">KungFu Skate</li>
        <li>About</li>
        <li>How to Play</li>
        <li>Top Scores</li>
        <li>Play</li>
      </ul>
    </CanvasStyled>
  );
};

export default GameMenu;
