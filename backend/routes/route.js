const express = require('express');
const router = express.Router();

const userRoute = require('./user/_routes');
const attandanceRoute = require('./attendance/_routes');
const masterRoute = require('./general-masters/_routes');
const customerRoute = require("./customers/_routes")
const projectListRoute = require("./projectList/_routes")
const leadRoutes = require("./leads/_routes")
const siteViistsRoutes = require("./siteVisits/_routes");
const associateRoutes = require("./associates/_routes")
const bookingRoutes = require("./booking/_routes")
const projectDemandRoutes = require("./projectDemand/_routes")
const markattendance=require("./markattendance/_routes")

//Api`s
router.use('/user', userRoute);
router.use('/attendance', attandanceRoute);
router.use('/masters', masterRoute);
router.use('/customers', customerRoute);
router.use('/projectList', projectListRoute);
router.use("/leads",leadRoutes)
router.use("/site-visits",siteViistsRoutes)
router.use("/associates",associateRoutes)
router.use("/bookings",bookingRoutes)
router.use("/project-demand",projectDemandRoutes)
router.use("/markattendance",markattendance)



module.exports = router;