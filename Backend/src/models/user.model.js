import mongoose,{Schema} from "mongoose";
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        avatar:{
            type:String ,//cloudnary url
            required:true, 
        }
    },
    {timestamps:true}
)


export const User=mongoose.model("User",userSchema)