import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "../../../database/db";

const onlyAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id; //obteniendo el id de pagina

  try {
    const db = new Database(); //nueva instancia de clase
    const entry = await db.getByID(id as string);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.end(JSON.stringify({ data: entry }));
  } catch (e) {
    console.error(e);
    res.statusCode = 418;
    res.end(
      JSON.stringify({
        length: 0,
        data: [],
        error: "Sorry :(",
      })
    );
  }
};
export default onlyAvo;
