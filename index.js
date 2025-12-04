import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';

const app = express();
mongoose.connect("mongodb+srv://admin:123@cluster0.eejpecu.mongodb.net/crystalbeauty?appName=Cluster0").then(() => {
    console.log("Connected to the database: crystalbeauty");
    }
).catch(() => {
    console.log("Connection failed ");
}
);

//mongodb+srv://admin:123@cluster0.eejpecu.mongodb.net/?appName=Cluster0
app.use(bodyParser.json());
app.use(
    (req, res, next) => {
        const header = req.header("Authorization");
        if (header != null) {
            const token = header.replace("Bearer ", "");
            jwt.verify(token, "random456", (err, decoded) => {
            console.log(decoded);

            if(decoded!=null){
                req.user= decoded; 
            }
            });
        }



        next();
    }
)

app.use("/api/user", userRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});