import express from "express";
import userModel from "../models/user.js"
const routing = express.Router()


routing.post("/register", async (req,res) => {
    const newUser = new userModel ({
        userId: req.body.userId,
        password: req.body.userPassword,
        userName: req.body.userName,
        gender : req.body.userGender,
        email: req.body.userEmail,
        phone: req.body.userPhone
    })

    await newUser.save()

    res.json({
        msg: "Register",
        result: newUser
    })

})

routing.post("/login", (req,res) => {
    res.json({
        msg: "Login"
    })
})


routing.get("/profile", (req,res) => {
    res.json ({
        msg: profile
    })
})


export default routing