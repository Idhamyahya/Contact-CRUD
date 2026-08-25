import express from "express";
import {
  getAllContact_C,
  getContactById_C,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/contacts", getAllContact_C);
router.get("/contacts/:id", getContactById_C);

export default router;
