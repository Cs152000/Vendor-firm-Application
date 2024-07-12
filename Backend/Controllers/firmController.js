import Vendor from '../Models/Vendor.js';
import Firm from '../Models/Firm.js';
import multer from "multer";
const storage = multer.diskStorage({
  destination: "uploads",
  filename:(req, file, cb) =>{
    return cb(null, `${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage:storage })
  
const addFirm=async(req,res)=>{
//adding Images through Multer
    try{
      const {firmName,area,category,region,offer}=req.body;
      const image=req.file?req.file.filename:undefined;
      
    const vendor=await Vendor.findById(req.vendorId)
    if(!vendor){
        return res.status(401).json({error:"vendor not found"})
    }
    if(vendor.firm.length>0){
      return res.status(401).json({message:"vendor can have only one firm"})
    }
    const firm=new Firm({
        firmName,area,category,region,offer,image,vendor:vendor._id
    })
   const savedFirm=await firm.save();
   const firmId=savedFirm._id;
   const savedFirmName=savedFirm.firmName;
   //saving firms to vendors through push method
     vendor.firm.push(savedFirm)
     await vendor.save();
     
   return res.status(201).json({message:"firm added successfully",firmId,savedFirmName})
  }
    //saving firm to vendor 

catch(error){
 res.status(500).json({error:"internal server error"})
 console.error(error)
}
}
const getAllFirms=async(req,res)=>{
  try{
      const firms=await Firm.find();
      res.json(firms)
      console.log(firms)
  }
  catch(err){
      console.log(err)
     res.status(500).json({error:"internal server error"})
  }
}
const deleteFirmById=async(req,res)=>{
  try{
    const firmId=req.params.firmId;
const deletedFirm=await Firm.findByIdAndDelete(firmId)
if(!deletedFirm){
return res.status(400).json("Firm not found")
} 
console.log(deletedFirm)
console.log("firm deleted successfully.")    
res.status(201).json("firm deleted successfully")
}
  catch(err){
    res.status(500).json("internal server error")
  }
}

export default {addFirm:[upload.single("image"),addFirm],getAllFirms,deleteFirmById};