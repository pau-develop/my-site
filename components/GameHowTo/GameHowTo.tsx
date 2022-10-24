import Image from "next/image";

const GameHowTo = () => {
  return (
    <div className="menu-wrap__about">
      <h2>How to Play</h2>
      <div className="menu-wrap__about-wrap">
        <div className="menu-wrap__about-left">
          <p>
            Use the <span>W</span> <span>A</span> <span>S</span> <span>D</span>{" "}
            keys to move the player.
          </p>
          <p>
            Press <span>M</span> to shoot ninja stars. Hold it down to shoot
            non-stop.
          </p>
          <p>
            Press <span>N</span> to use melee attack. Hold down <span>N</span>{" "}
            for two seconds and release to cast an energy wave.
          </p>
          <p>
            Press <span>SPACE</span> to Start/Continue.
            <br />
            Press <span>P</span> to Insert Coins.
          </p>
        </div>
        <div className="menu-wrap__about-right">
          <div className="menu-wrap__about-right-img">
            <img src={"/how_kung_move.gif"} alt="movement demo" />
          </div>
          <div className="menu-wrap__about-right-img">
            <img src={"/how_kung_shoot.gif"} alt="shooting demo" />
          </div>
          <div className="menu-wrap__about-right-img">
            <img src={"/how_kung_wave.gif"} alt="melee attack demo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHowTo;
