import express from "express"
import protectRoute from "../middlewares/auth.js";
import { createSession, deleteSession, getMySessions, getSessionById } from "../controllers/sessionController.js";

const sessionRouter = express.Router();

sessionRouter.post("/create", protectRoute, createSession); // Create a new session
sessionRouter.get("/my-sessions", protectRoute, getMySessions); // Get all sessions for the authenticated user
sessionRouter.get("/:id", protectRoute, getSessionById); // Get session by ID
sessionRouter.delete("/:id", protectRoute, deleteSession); // Delete a session by ID

export default sessionRouter;
