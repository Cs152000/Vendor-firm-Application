import express from "express";
import verifyToken from './../Middlewares/verifyToken.js';
import firmController from "./../Controllers/firmController.js";
const router=express.Router();

router.post("/add-firm",verifyToken,firmController.addFirm)
router.get("/uploads/:imageName",(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent("Content-type","image/jpeg");
    res.sendFile(path.join(__dirname,"..",'uploads',imageName))
})

router.delete("/:firmId",firmController.deleteFirmById)


export default router;