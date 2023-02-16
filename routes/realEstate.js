const express = require('express')
const upload=require('../cloudinary/image');
const realEstateController=require('../controller/realEstateController');
const verifyTokenAndRole =require('../middleware/authentication');
const router=require('express').Router();

router.post('/create',verifyTokenAndRole,upload.array('image'),realEstateController.create);
router.get('/',realEstateController.getAll);
router.get('/:id',realEstateController.getSingle);
router.delete('/delete/:id',realEstateController.deleteEstate);
router.put('/update/:id',verifyTokenAndRole,upload.array('image'),realEstateController.updateEstate);
module.exports=router;