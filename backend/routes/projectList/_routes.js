const express = require('express');
const projectList = require("./projectList")
const router = express.Router();


router.post('/create-projectlist', projectList.createProjectList);
router.get('/get-all-projectlist', projectList.getAllProjectList);
router.get('/get-single-projectlist', projectList.getSingleProject);
router.delete('/delete-projectlist', projectList.deleteProjectList);
router.put('/update-projectlist', projectList.updateProjectList);
router.post('/create-buildinglist',projectList.createBuilding);
router.post('/update-buildinglist',projectList.updateBuilding);
router.post('/create-floorlist',projectList.createFloorList);
router.post('/update-floorlist',projectList.updateFloorList);
router.post('/create-flatlist',projectList.createFlat);
router.post('/update-flatlist',projectList.updateFlat);
router.post('/create-plotlist',projectList.createPlot);
router.post('/update-plotlist',projectList.updatePlot);
router.post('/create-rowHouselist',projectList.createRowHouse);
router.post('/update-rowHouseList',projectList.updateRowHouse);
router.post('/create-farmLandList',projectList.createFarmLand);
router.post('/update-farmLandList',projectList.updateFarmLand)

module.exports = router