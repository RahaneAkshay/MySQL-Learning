import db from "../database/connecton";
import { Router, Response, Request } from "express";
export  const router = Router();

router.get("/fetch", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await db.execute(`select * from student`);
    res.status(200).send(result);
    res;
  } catch (e) {
    res.status(200).send(e);
  }
});
