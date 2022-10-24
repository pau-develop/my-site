import connectDB from "../../database/connectDB";
import { useState, useCallback, useEffect } from "react";
import GameTopScoresStyled from "./GameTopScoresStyled";

interface scoresProps {
  name: string;
  player: string;
  score: string;
}

const GameTopScores = () => {
  const [scores, setScores] = useState<scoresProps[] | undefined>();
  const fetchScores = useCallback(async () => {
    const response = await fetch("/api/scores");
    const { myScores } = await response.json();
    console.log(myScores);
    setScores(myScores);
  }, []);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  return (
    <GameTopScoresStyled className="scores">
      <h2 className="scores__title">Top Scores</h2>
      {scores !== undefined ? (
        <ul className="scores__list">
          {scores.map((element, index) => {
            return (
              <li key={index}>
                <span>{index + 1}</span>
                <span>
                  {element.player === "0" && (
                    <img src="/charIcon1.png" alt="bald-guy" />
                  )}
                  {element.player === "1" && (
                    <img src="/charIcon2.png" alt="chinese-girl" />
                  )}
                  {element.player === "2" && (
                    <img src="/charIcon3.png" alt="amazing-dog" />
                  )}
                </span>
                <span>{element.name}</span>
                <span>{element.score}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <span>Fetching data...</span>
      )}
    </GameTopScoresStyled>
  );
};
export default GameTopScores;
