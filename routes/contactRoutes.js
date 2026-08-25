import express from "express";
import { getAllContact_C } from "../controllers/contactController.js";

const router = express.Router();

router.get("/contacts", getAllContact_C);

export default router;
