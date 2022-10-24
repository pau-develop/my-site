import connectDB from "../../database/connectDB";
import { useState, useCallback, useEffect } from "react";

interface scoresProps {
  name: string;
  player: number;
  score: number;
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
    <div className="menu-wrap__scores">
      <h2>Top Scores</h2>
      {scores !== undefined && (
        <ul>
          {scores.map((element, index) => {
            return (
              <li key={index}>
                <span>{index + 1}</span>
                <span>{element.player}</span>
                <span>{element.name}</span>
                <span>{element.score}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default GameTopScores;
