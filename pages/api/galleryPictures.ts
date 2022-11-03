import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../database/connectDB";

const galleryPictures = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const client = await connectDB();
  const db = client.db("site");
  switch (request.method) {
    case "GET":
      try {
        const myImages = await db
          .collection("gallery-image")
          .find({})
          .toArray();
        response.json({ myImages });
      } catch (error) {
        response.json({ error });
      }
      break;
  }
};

export default galleryPictures;
