import { Router } from "express";
import * as absenceController from "../controllers/absencesController";

const router = Router();

router.get("/", absenceController.getAllAbsences);
router.get("/:id", absenceController.getAbsenceById);

export default router;
