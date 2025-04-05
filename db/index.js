/*import mongoose from "mongoose";
import {DB_NAME} from "../constant/constant.js";

const connectDB = async () => {
    try{
        await mongoose.connect('${process.env.MONGO_URL}/${DB_NAME}')
        console.log('\n MongoDB connected successfully: ${conncetionInstance.connection.host}');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
}
 export default connectDB;*/

/*MAIN INDEX.JS FILE
 const dotenv = require('dotenv');
import connectDB from './db/index.js';
dotenv.config(); // Load environment variables from .env file

dotenv.config({ path: './env' }); // Load environment variables from config.env file

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with failure
}

*/

/*import mongoose from "mongoose";
import {DB_NAME} from "../constant/constant.js";
import express from "express";
( async () => {
    try {
    await mongoose.connect('${process.env.MONGO_URL}/${DB_NAME}')
        app.on("error",(error) => {
            console.log("Err",error);
            throw error;
        })
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; 
    }
})*/
    