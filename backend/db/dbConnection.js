import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async function dbConnection() {
	try {
		await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`);
		console.log(`DB Connected!`);
	} catch (error) {
		console.log(`Error connecting to database: ${error.message}`);
	}
}
