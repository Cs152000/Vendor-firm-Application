import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import vendorRoutes from "./Routes/vendorRoutes.js"
import firmRoutes from "./Routes/firmRoutes.js"
import productRoutes from "./Routes/productRoutes.js"
import bodyParser from "body-parser"
import multer from "multer"


const app=express();
dotenv.config();
app.use(cors({
    origin:["https://66876b054948c2d3f22e2a89--stately-gelato-e81b31.netlify.app/"],
    methods:["POST","GET","DELETE"],
    cresentials:true
}))
const connect=async(req,res)=>{
    try{
   await  mongoose.connect(process.env.MONGO)
   console.log("the mongo db is connected")
}
catch(error){
    console.log(error)
    console.log("the error occured during connection");
}}

app.use(bodyParser.json())
app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({storage })

app.use("/vendor",vendorRoutes)
app.use("/firm",firmRoutes)
app.use("/product",productRoutes)
app.post("/uploads",upload.single("image"),(req,res)=>{
    console.log(req.file)
})
        //Get Method
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,()=>{
    connect()
    console.log(`server is running at ${PORT}`)
})
