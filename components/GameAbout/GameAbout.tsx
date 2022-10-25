import GameAboutStyled from "./GameAboutStyled";

const GameAbout = () => {
  return (
    <GameAboutStyled className="about">
      <h2 className="about__title">About</h2>
      <div className="about__image">
        <img src="/KUNG_LOGO.png" alt="Kungfu Skate logo" />
      </div>
      <p className="about__text">
        {`Inspired by the Arcades of the 90's, an horizontally scrolling shooter made with`}
        <a href="https://unity.com/" target="_blank" rel="noreferrer">
          {` Unity `}
        </a>
        and
        <a
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          target="_blank"
          rel="noreferrer"
        >
          {` cSharp`}
        </a>
        .
        <br />
        {`I'm rebuilding this game from the ground up, check the progress in
        this `}
        <a
          href="https://github.com/pau-develop/kungfu-skate"
          target="_blank"
          rel="noreferrer"
        >
          github repo.
        </a>
      </p>
    </GameAboutStyled>
  );
};

export default GameAbout;
