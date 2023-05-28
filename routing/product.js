import express from "express";
import productModel from "../models/product.js";
const routing = express.Router()


routing.get("/", async (req,res) => {
    const products = await productModel.find()
    res.json({
        msg: "Product get all",
        products: products
    })
})


routing.get("/:productid", async (req, res) => {
    const product = await productModel.findById(req.params.productid)
    res.json({
        msg: "Product detail get",
        product : product
    })
})



routing.post("/",async (req,res)=>{
    // name, price, description, stock
    const newProduct = new productModel ({
        name: req.body.productName,
        price: req.body.productPrice,
        description: req.body.productDescription,
        stock: req.body.productStock
    })


    await newProduct.save()


    res.json({
        msg:"create product",
        result:newProduct
    })
})

routing.delete("/:productid", async (req,res)=> {
    await productModel.findByIdAndDelete(req.params.productid)
    res.json({
        msg: `delete product ${req.params.productid}`,

    })
})


routing.delete("/", async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
})


routing.put("/:productid", async (req, res) => {

    const product = await productModel.findById(req.params.productid)


    if (product) {
        product.name = req.body.productName ? req.body.productName : product.name
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDescription ? req.body.productDescription : product.description
        product.stock = req.body.productStock ? req.body.productStock : product.stock

    }
    const updatedProduct = await product.save()


    res.json({
        msg: `updated product at ${req.params.productid}`,
        product: updatedProduct
    })
})


export default routing
