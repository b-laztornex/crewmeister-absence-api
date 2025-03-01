import { Router } from "express";
import * as membersController from "../controllers/membersController";

const router = Router();

router.get("/", membersController.getAllMembers);
router.get("/:id", membersController.getMemberById);

export default router;
