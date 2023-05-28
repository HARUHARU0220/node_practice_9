import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan"
import dotenv from "dotenv"
import connectDB from "./config/database"

const app = express ()

dotenv.config()

connectDB()

import orderRouter from "./routing/order.js"
import productRouter from "./routing/product.js"
import userRouter from "./routing/user.js"

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended:false}))

app.use("/order",orderRouter)
app.use("/product",productRouter)
app.use("/user", userRouter)

const port = process.env.PORT
app.listen(port, console.log(`server started at ${port}`))