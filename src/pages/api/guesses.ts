import type { NextApiRequest, NextApiResponse } from "next";
import guesses from "@/db/guesses.json";
import fs from "fs";

async function getGuesses(req: NextApiRequest, res: NextApiResponse) {
  return res.json(
    JSON.parse(
      JSON.stringify(
        guesses.sort((a, b) => {
          //@ts-ignore
          const dateA = new Date(a.dateCreate);
          //@ts-ignore
          const dateB = new Date(b.dateCreate);
          return dateB.getTime() - dateA.getTime();
        })
      )
    )
  );
}
async function addGuess(req: NextApiRequest, res: NextApiResponse) {
  const requestData = req.body;
  if (requestData.name && requestData.slug ) {
    //@ts-ignore
    guesses.push({
      dateCreate: new Date().toString(),
      slug: requestData.slug,
      name: requestData.name,
      prefix: "",
      locationId: "1"
    });
    fs.writeFileSync("src/db/guesses.json", JSON.stringify(guesses));
  }
  return res.status(200).json(guesses);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      return getGuesses(req, res);
    }
    case "POST": {
      return addGuess(req, res);
    }
  }
}
