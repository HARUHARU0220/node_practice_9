import mongoose from "mongoose";
const userSchema = mongoose.Schema (
    {
        userId : {
            type: String,
            unique: true,
            required: true

        },

        password : {
            type: String,
            required: true

        },
        userName: {
            type: String,
            required: true
        },

        birthday : Number,

        gender : {
            type : Number,
            default : 1
        },

        email : {
            type : String,
            unique : true,
            required : true

        },

        phone : {
            type: Number,
            required : true
        }

    },

    {
        timestamps : true
    }

)

const userModel = mongoose.model('user', userSchema)

export default userModel
