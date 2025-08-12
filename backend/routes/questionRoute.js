import express from "express";
import { togglePinnedQuestion, updateQuestionNote, addQuestionsToSession} from "../controllers/questionController.js";
import protectRoute from "../middlewares/auth.js";


const questionRouter = express.Router();

questionRouter.post("/add", protectRoute, addQuestionsToSession);
questionRouter.post("/:id/pin", protectRoute, togglePinnedQuestion);
questionRouter.put("/:id/note", protectRoute, updateQuestionNote);

export default questionRouter