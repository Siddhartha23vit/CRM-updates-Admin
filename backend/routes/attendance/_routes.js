const express = require('express');
const auth = require('../../middlewares/auth');
const attendance = require('./attendance');

const router = express.Router();

router.post("/mark-attendance",attendance.markattendance)
router.post("/get-attendance",attendance.getattendance)



module.exports = router
