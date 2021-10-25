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

router.get("/create", async (req: any, res: Response): Promise<any> => {
    try {
       
      const result = await db.execute(`insert into student(name,roll_no) values(?,?)`,[req.body.name,req.body.roll_no]);
      res.status(200).send(result);
     
    } catch (e) {
      res.status(200).send(e);
    }
  });
