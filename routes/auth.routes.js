import express from "express";
const router = express.Router();

import { login, logout, register } from "../controllers/auth.controllers.js";

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

export default router;
