import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';

let app = express();
mongoose.connect("mongodb+srv://admin:123@cluster0.eejpecu.mongodb.net/crystalbeauty?appName=Cluster0").then(() => {
    console.log("Connected to the database: crystalbeauty");
    }
).catch(() => {
    console.log("Connection failed ");
}
);

//mongodb+srv://admin:123@cluster0.eejpecu.mongodb.net/?appName=Cluster0
app.use(bodyParser.json());

app.use("/api/students", studentRouter);
app.use("/api/items", itemRouter);
app.use("/api/user", userRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});