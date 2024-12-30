import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from './routes/Posts.js';
import generateRouter from './routes/GenerateImage.js';

dotenv.config();
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

app.use("/api/post", router);
app.use("/api/generateImage", generateRouter);  

const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGOOSE_URL)
        .then(() => {
            console.log("MongoDB is connected");
        })
        .catch((error) => {
            console.log("Falied to connect to DB");
            console.log(error);
        })
}

app.get('/', async (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
})

const startServer = () => {
    try {
        connectDB();
        app.listen(port, () => {
            console.log("Server is started on port " + port)
        })
    }
    catch (err) {
        console.log(err);
    }
}

startServer();
