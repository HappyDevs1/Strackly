import express from "express";

import { registerMasterUser, loginMasterUser } from "../controllers/masterUserController";

const router = express.Router();

router.post("/master/register", registerMasterUser);
router.post("/master/login", loginMasterUser);

export default router;