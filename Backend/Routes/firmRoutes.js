import express from "express";
import verifyToken from './../Middlewares/verifyToken.js';
import firmController from "./../Controllers/firmController.js";
const router=express.Router();

router.post("/add-firm",verifyToken,firmController.addFirm)
router.get("/all-firms",firmController.getAllFirms)
router.delete("/:firmId",firmController.deleteFirmById)


export default router;