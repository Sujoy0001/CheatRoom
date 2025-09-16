import { Router } from "express";
import {
    getMessages,
    sendMessage,
    uploadFile
} from "../controllers/message.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/allMessages/:code").get(getMessages);
router.route("/sendMessage").post(sendMessage);
router.route("/upload").post(upload.single("file"), uploadFile);

export default router;