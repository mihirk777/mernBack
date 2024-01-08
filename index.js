import express, { response } from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors'


const app= express();
app.use(express.json());
app.use(cors());


const port= process.env.port||3000;
const mongoDBURL='mongodb+srv://mihir:mihir0123@cluster0.q2llksg.mongodb.net/books-collection?retryWrites=true&w=majority';

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log(`App connected to database`);
    app.listen(port,()=>{
        console.log(`App is running on port ${port}`)
    });
})
.catch((error)=>{
    console.log(console.error());
});
