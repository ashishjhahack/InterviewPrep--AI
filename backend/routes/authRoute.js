import express from 'express';
import protectRoute from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';


const authRouter = express.Router();


//Auth Routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", protectRoute, getUserProfile); // Get user profile (protected route)

// this route is for uploading images
authRouter.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
    }
);

export default authRouter;