import Firm from '../Models/Firm.js';
import Product from '../Models/Product.js';
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({storage })
  
                       //Adding the products to firm
 const addProduct=async(req,res)=>{
    try{
        const { productName,price,category,bestSeller,description}=req.body;
       
        const image=req.file?req.file.filename:undefined;

      const firmId= req.params.firmId;
        const firm=await Firm.findById(firmId)
    
        if(!firm){
            return res.status(404).json({error:"firm not found"})
        }
        const product=new Product({
            productName,price,category,bestSeller,description,image,firm:firm._id
        })
       const savedProduct=await product.save();
       console.log(savedProduct)
       //saving firms to vendors through push method
         firm.product.push(savedProduct)
         await firm.save();
    
       return res.status(201).json({message:"Product added successfully"})
        //saving firm to vendor 
    }
    catch(error){
     res.status(500).json({error:"internal server error"})
     console.log(error)
    }
    }

                   //get all products by firmId
    const getProductsByFirm=async(req,res)=>{
        try{
const firmId=req.params.firmId;
const firm=await Firm.findById(firmId)
if(!firm){
  return res.status(400).json("firmId not found")
}
const products=await Product.find({firm: firmId})
    res.status(200).json(products)
    console.log(products)
        }
        catch(err){
          console.log(err)
res.status(500).json("internal server error")

        }
    }
    const deleteProductById=async(req,res)=>{
      try{
        const productId=req.params.productId;
 const deletedProduct=await Product.findByIdAndDelete(productId)
 if(!deletedProduct){
  return res.status(400).json("Product not found")
 }  
 res.status(201).json("product deleted successfully")   
}
      catch(err){
        res.status(500).json("internal server error")
      }
    }
 
 export default {addProduct:[upload.single("image"),addProduct],getProductsByFirm,deleteProductById};