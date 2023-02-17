const express = require("express");
const categoryController = require("../controller/categoryController");
const verifyTokenAndRole  = require("../middleware/authentication");
const router = express.Router();
router.post('/create',verifyTokenAndRole,categoryController.post);
router.get('/',categoryController.get);
module.exports = router;