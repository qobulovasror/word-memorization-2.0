import { Router } from "express";
import { getWords } from "../controller/gameOnePlayer";

const router = Router();

//one player
// router.get('/one', getWords)
router.get('/one', (req, res)=>{
    req.query
})

//many player
// router.get("/many")

export default router;