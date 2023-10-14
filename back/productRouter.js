import express from "express"
import productModel from "./DataBase/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    let allProducts = await productModel.find({});
    res.json(allProducts)
})
productRouter.post("/add", async (req, res) => {
    let productToAdd = new productModel(req.body)
    let result = await productToAdd.save()
    console.log(result);
    res.send(result);
})


export default productRouter