import express from "express";
import productController from "../Controllers/productController.js";
const router=express.Router();

router.post("/add-products/:firmId",productController.addProduct)
router.get("/:firmId/products",productController.getProductsByFirm)

router.post("/uploads",productController.addProduct,(req,res)=>{
    console.log(req.file)
})

router.delete("/:productId",productController.deleteProductById)

export default router;