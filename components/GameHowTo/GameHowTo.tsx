import Image from "next/image";
import GameHowToStyled from "./GameHowToStyled";

const GameHowTo = () => {
  return (
    <GameHowToStyled className="how-to">
      <h2>How to Play</h2>

      <div className="how-to__contents">
        <p>
          Use the <span>W</span> <span>A</span> <span>S</span> <span>D</span>{" "}
          keys to move the player.
        </p>
        <p>
          Press <span>M</span> to shoot ninja stars. Hold it down to shoot
          non-stop.
        </p>
        <p>
          Press <span>N</span> to use melee attack. Hold down <span>N</span> for
          two seconds and release to cast an energy wave.
        </p>
        <p>
          Press <span>P</span> to Insert Coins.
          <br />
          Press <span>SPACE</span> to Start/Continue.
        </p>
      </div>
    </GameHowToStyled>
  );
};

export default GameHowTo;
