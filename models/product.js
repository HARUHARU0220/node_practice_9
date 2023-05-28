import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : true
        },
        price: {
            type: Number,
            required : true
        },
        description: String,
        isSale: {
            type: Boolean,
            default : false
        },
        stock: {
            type: Number,
            default: 0
        }

    },

    {
        timestamps: true
    }
)

const productModel = mongoose.model('product',productSchema)

export default productModel