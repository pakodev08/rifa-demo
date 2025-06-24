import { Router } from "express";
import { generarNumberos } from "../controllers/numbers-generated.js";

const router = Router();

router.get('/', generarNumberos)

export {
    router
}