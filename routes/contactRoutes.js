import express from "express";
import {
  deleteContact_C,
  getAllContact_C,
  getContactById_C,
  updateContact_C,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/contacts", getAllContact_C);
router.get("/contacts/:id", getContactById_C);
router.delete("/contacts/:id", deleteContact_C);
router.put("/contacts/:id", updateContact_C);

export default router;
