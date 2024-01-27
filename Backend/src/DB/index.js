import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
const connectDB=async()=>{
    try {
        const connectionInstant=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MonoDB connection !! DBHost: ${connectionInstant.connection.host}`);
    } catch (error) {
        console.log("ERORRR: ",error);
        process.exit(1)
    }
}
export default connectDB