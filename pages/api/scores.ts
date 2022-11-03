import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../database/connectDB";

const scores = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const db = client.db("site");
  switch (request.method) {
    case "GET":
      try {
        const scores = await db
          .collection("kung-scores")
          .find({})
          .sort({ score: -1 })
          .toArray();
        const myScores = new Array(scores.length);
        for (let i = 0; i < scores.length; i++) {
          myScores[i] = {
            name: scores[i].name,
            player: scores[i].player,
            score: scores[i].score,
          };
        }
        response.json({ myScores });
      } catch (error) {
        response.json({ error });
      }
      break;

    case "POST":
      const score = JSON.parse(request.body);
      const result = await db.collection("kung-scores").insertOne({
        name: score.name,
        score: score.score,
        player: score.player,
      });
      response.json({ result });
  }
};

export default scores;
