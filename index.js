import express from 'express';
import cors from 'cors';
import { connectDb } from './database/db.config.js';
import { userRouter } from './Routes/Router.js';
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter);
connectDb();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});