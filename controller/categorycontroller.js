const Category=require('../models/Category');
exports.post=async(req,res)=>{
    const newCat=await Category(req.body);
    try {
        const savedCat=await newCat.save();
        res.status(200).json(savedCat);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}
exports.get=async(req,res)=>{
    try {
        const cats=await Category.find();
        res.status(200).json(cats);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}