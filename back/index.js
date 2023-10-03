import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import './DB/config.js'
import productRouter from "./productRouter.js";


const connection = mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")

const port = 4000

const app = express()
app.use(express.json())
app.use(cors())

app.use("/product", productRouter)

connection.then(() => {
    app.listen(port, () =>
        console.log("Server started at port " + port))
})
.catch((err) => console.log("DB ERROR: " + err));
