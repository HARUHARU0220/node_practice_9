import mongoose from "mongoose";

const orderSchema = mongoose.Schema (
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required : true
        },
        qty: {
            type: Number,
            default: 1
        },
        memo: String,

        address: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const orderModel = mongoose.model('order',orderSchema)
export default orderModel

