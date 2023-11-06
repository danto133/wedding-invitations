import type { NextApiRequest, NextApiResponse } from "next";
import wishes from "@/db/wishes.json";
import fs from "fs";

async function getWishes(req: NextApiRequest, res: NextApiResponse) {
  return res.json(
    JSON.parse(
      JSON.stringify(
        wishes.sort((a, b) => {
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
async function addWish(req: NextApiRequest, res: NextApiResponse) {
  const requestData = req.body;
  if (requestData.name && requestData.content) {
    //@ts-ignore
    wishes.push({
      name: requestData.name,
      content: requestData.content,
      dateCreate: new Date().toString(),
    });
    fs.writeFileSync("src/db/wishes.json", JSON.stringify(wishes));
  }
  return res.status(200).json(wishes);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      return getWishes(req, res);
    }
    case "POST": {
      return addWish(req, res);
    }
  }
}
