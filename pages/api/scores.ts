import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../database/connectDB";

const scores = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const db = client.db("kungfu-skate");
  switch (request.method) {
    case "GET":
      try {
        const scores = await db
          .collection("scores")
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
        break;
      } catch (error) {
        response.json({ error });
      }

    case "POST":
      const score = JSON.parse(request.body);
      const result = await db.collection("scores").insertOne({
        name: score.name,
        score: score.score,
        player: score.player,
      });
      response.json({ result });
  }
};

export default scores;
