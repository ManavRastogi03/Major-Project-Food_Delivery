import { asyncHandler } from "../utilis/asyncHandler.js";
const registerUser=asyncHandler(async (req,res)=>{
    // get user detail from frontend 
    // validation ->not empty
    // check if user already exist
    // check for images ad avtar
    // upload them to cloudnary,avtar
    // create user on=bject --create entry in db
    // remove password and refresh token field from response 
    // check for user creation 
    // return res 
    // ------YOU CAN DO CONSOLE LOG REQ.BODY----
    res.status(200).json({
        message:"ok",
    })
})
//routes import

export {registerUser} 