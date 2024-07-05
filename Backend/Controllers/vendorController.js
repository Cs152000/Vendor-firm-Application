import Vendor from "../Models/Vendor.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey=process.env.whatismyname;

const vendorRegister=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
    const vendorEmail=await Vendor.findOne({email})
    if(vendorEmail){
        return res.status(400).json("email already exists")
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newVendor=new Vendor({
        username,
        email,
        password:hashedPassword
    })
    await newVendor.save()
    res.status(201).json({message:"Vendor registered successfully"})
    console.log("registered successful")
}
catch(err){
    console.error();
    res.status(500).json({error:"internal server error"})
}
}
const vendorLogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
const vendor=await Vendor.findOne({email})
if(!vendor || !(await bcrypt.compare(password,vendor.password)))
    {
        return res.status(400).json({error:"invalid email or password"})
    }
    const token=jwt.sign({vendorId: vendor._id},secretKey,{expiresIn:"1d"});
    const vendorId=vendor._id    
        res.status(201).json({success:"login successful",token,vendorId})
        console.log(email,"this is token",token,vendorId)
    }
    catch(error)
{
res.status(500).json({message:"internal server error"})
console.log(error)
}}
//get all vendor values
 const getAllVendors=async(req,res)=>{
    try{
        const vendors=await Vendor.find().populate("firm");
        res.json(vendors)
        console.log(vendors)
    }
    catch(err){
        console.log(err)
       res.status(500).json({error:"internal server error"})
    }
 }
 const getVendorById=async(req,res)=>{
    try{
const vendorId=req.params.apple; //id is entered into the route dynamically
const vendor= await Vendor.findById(vendorId).populate("firm")
if(!vendor)
    {
        return res.status(400).json("vendor not found")
    }
    const vendorFirmId= vendor.firm[0]._id;
    const vendorFirmName=vendor.firm[0].firmName
   res.status(200).json({message:"this is vendorFirmId",vendorFirmId,vendorFirmName})
      console.log("this is vendorFirmID for one firm",vendorFirmId,vendorFirmName)
    }
    catch(error){
        console.log(error)
 res.status(500).json("internal server error")
    }
 }
export default {vendorRegister,vendorLogin,getAllVendors,getVendorById};