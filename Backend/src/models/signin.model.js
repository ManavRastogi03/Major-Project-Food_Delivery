import mongoose from "mongoose"
const signinSchema=new mongoose.Schema(

    {
        username:{
            type:String,
            required:[true,"Username is Required"],
            unique:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:[true,"Email is Required"],
            unique:true,
            lowercase:true,
        },
        Password:{
            type:String,
            required:[true,"Password is Required"],

        },
        ConfirmPassword:{
            type:String,
            required:[true,"Confirm Pasword is Required"]
        }
    },
    {timestamps:true}
)
export const Signin=mongoose.model("Signin",signinSchema)