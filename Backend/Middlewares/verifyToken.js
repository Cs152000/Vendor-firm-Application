import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Vendor from "../Models/Vendor.js";

dotenv.config();
const secretKey=process.env.whatismyname;

const verifyToken=async(req,res,next)=>{
    const token = req.headers.token;

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token,secretKey);
      
       const vendor=await Vendor.findById(decoded.vendorId)

       if(!vendor){
        return res.status(400).json({error:"vendor not found"})
       }
       req.vendorId= vendor._id;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
export default verifyToken;
