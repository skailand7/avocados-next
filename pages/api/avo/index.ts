import { IncomingMessage, ServerResponse } from "http";
import { Database } from "../../../database/db";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const db = new Database(); //nueva clase
    const allEntries = await db.getAll();
    const length = allEntries.length;

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.end(JSON.stringify({ length, data: allEntries }));
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

export default allAvos;
