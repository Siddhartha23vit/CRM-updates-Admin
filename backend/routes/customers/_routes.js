const express = require('express');
const customers = require('./customers');
const formidable = require("express-formidable")
const router = express.Router();

router.post("/register",formidable(),customers.registerCustomers)
router.get("/getallcustomers",customers.getAllCustomers)
router.get("/customer-photo/:pid",customers.photoControler);
router.put("/editcustomer",formidable(),customers.updateCustomer)
router.get("/deletecustomer",customers.deleteCustomers)

module.exports = router