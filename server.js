import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import dbConnection from "./db/dbConnection.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import conversationsRoutes from "./routes/conversations.routes.js"

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/conversations", conversationsRoutes);
app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	})
);

app.listen(process.env.PORT || 3000, async () => {
	await dbConnection();
	console.log(
		`Server is running on port http://localhost:${process.env.PORT}`
	);
});
