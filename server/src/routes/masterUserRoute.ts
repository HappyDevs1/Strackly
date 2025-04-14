import express from "express";
import { registerMasterUser, loginMasterUser, getMasterUser, createEmployee } from "../controllers/masterUserController";

const router = express.Router();

router.post("/master/register", registerMasterUser);
router.post("/master/login", loginMasterUser);
router.get("/master/get/:id", getMasterUser)
router.post("/master/create/employee/:orgId", createEmployee)

export default router;