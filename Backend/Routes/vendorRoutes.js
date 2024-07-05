
import express from "express";
import vendorController from './../Controllers/vendorController.js';
const router=express.Router();

router.post("/register",vendorController.vendorRegister)
router.post("/login",vendorController.vendorLogin)
router.get("/all-vendors",vendorController.getAllVendors)
router.get("/single-vendor/:apple",vendorController.getVendorById)
export default router