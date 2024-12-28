const express = require('express');
const projectDemand = require("./projectDemand")
const router = express.Router();

router.post('/create-project-demand', projectDemand.createProjectDemand);
router.get('/get-project-demand', projectDemand.getAllProjectDemands);
router.get('/get-single-project-demand', projectDemand.getSingleProjectDemand);
router.post('/update-project-demand', projectDemand.updateProjectDemand);
router.get('/delete-project-demand', projectDemand.deleteProjectDemand);


module.exports = router