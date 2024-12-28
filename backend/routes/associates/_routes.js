const express = require('express');
const formidable = require("express-formidable");
const associateController = require('./associate');
const router = express.Router();

router.post("/create-asociate",formidable(),associateController.crateAssociate)
router.get("/get-associates",associateController.getAssociates)
router.get("/associate-photo/:pid",associateController.getPhoto)
router.put("/update-associate",formidable(),associateController.updateAssociate)
router.get("/delete-associate",associateController.deleteAssociate)
router.get("/get-single-associate",associateController.getSingleAssociate)

module.exports = router