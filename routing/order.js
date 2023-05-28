import express from "express";
import orderModel from "../models/order.js";
const routing =express.Router()


routing.get("/",async (req,res)=>{
    const orders = await orderModel.find().populate("product", ["name", "price"])
    res.json({
        msg: "new order",
        orders: orders
    })
})

routing.get("/:orderid", async (req,res) => {
    const order = await orderModel.findById(req.params.orderid).populate("product")
    res.json({
        msg: "Order detail get",
        order : order
    })
})



routing.post("/", async (req,res)=> {

    const newOrder = new orderModel ({
        product : req.body.orderProduct,
        qty: req.body.orderQty,
        memo: req.body.orderMemo,
        address: req.body.orderAddress
    })

    await newOrder.save()

    res.json({
        msg: "create order",
        result: newOrder
    })
})

routing.delete("/",async (req,res)=> {
    await orderModel.deleteMany()
    res.json({
        msg:"delete order"
    })
})

routing.delete("/:orderid", async (req,res) => {
    await orderModel.findByIdAndDelete(req.params.orderid)
    res.json({
        msg: `delete order ${req.params.orderid}`,
    })
})

routing.put("/:orderid", async (req,res) => {

    const order = await orderModel.findById(req.params.orderid)

    if (order) {
        order.product = req.body.orderProduct ? req.body.orderProduct : order.product
        order.qty = req.body.orderQty ? req.body.orderQty : order.qty
        order.memo = req.body.orderMemo ? req.body.orderMemo : order.memo
        order.address = req.body.orderAddress ? req.body.orderAddress : order.address
    }
    const updatedOrder = await order.save()
    res.json({
        msg: `updated order at ${req.params.orderid}`,
        order: updatedOrder
    })
})


export default routing
