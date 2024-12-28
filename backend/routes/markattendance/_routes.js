const express = require('express');
const markAttendence = require("./markattendence")
const router = express.Router();

router.post('/create-markattendance', markAttendence.createProjectDemand);
router.get('/get-markattendance', markAttendence.getAllProjectDemands);
router.get('/get-single-markattendance', markAttendence.getSingleProjectDemand);
router.post('/update-markattendance', markAttendence.updateProjectDemand);
router.get('/delete-markattendance', markAttendence.deleteProjectDemand);


module.exports = router