import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const loginSchema=new Schema(
    {
        email:{
            type:String,
            required:[true,"Email is Required"],
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:[true,"Password is Required"],
        },
    }
)

loginSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

loginSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

loginSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            password: this.password,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
loginSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,   
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const Login=mongoose.model("Login",loginSchema)