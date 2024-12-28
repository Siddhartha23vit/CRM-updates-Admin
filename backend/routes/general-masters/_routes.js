const express = require('express');
const generalMasters = require('./generalMasters');

const router = express.Router();

// CRUD routes for 'designation'
router.post('/designation/create', generalMasters.designationCreate);
router.get('/designation/get', generalMasters.designationGet);
router.put('/designation/update', generalMasters.designationUpdate);
router.post('/designation/delete', generalMasters.designationDelete);

// CRUD routes for 'bank'
router.post('/bank/create', generalMasters.bankCreate);
router.get('/bank/get', generalMasters.bankGet);
router.put('/bank/update', generalMasters.bankUpdate);
router.post('/bank/delete', generalMasters.bankDelete);

// CRUD routes for 'userType'
router.post('/userType/create', generalMasters.userTypeCreate);
router.get('/userType/get', generalMasters.userTypeGet);
router.put('/userType/update', generalMasters.userTypeUpdate);
router.post('/userType/delete', generalMasters.userTypeDelete);

// CRUD routes for 'city'
router.post('/city/create', generalMasters.cityCreate);
router.get('/city/get', generalMasters.cityGet);
router.put('/city/update', generalMasters.cityUpdate);
router.post('/city/delete', generalMasters.cityDelete);

// CRUD routes for 'charges'
router.post('/charges/create', generalMasters.chargesCreate);
router.get('/charges/get', generalMasters.chargesGet);
router.put('/charges/update', generalMasters.chargesUpdate);
router.post('/charges/delete', generalMasters.chargesDelete);

// CRUD routes for 'facing'
router.post('/facing/create', generalMasters.facingCreate);
router.get('/facing/get', generalMasters.facingGet);
router.put('/facing/update', generalMasters.facingUpdate);
router.post('/facing/delete', generalMasters.facingDelete);

// CRUD routes for 'direction'
router.post('/direction/create', generalMasters.directionCreate);
router.get('/direction/get', generalMasters.directionGet);
router.put('/direction/update', generalMasters.directionUpdate);
router.post('/direction/delete', generalMasters.directionDelete);

// CRUD routes for 'inquiryStatus'
router.post('/inquiryStatus/create', generalMasters.inquiryStatusCreate);
router.get('/inquiryStatus/get', generalMasters.inquiryStatusGet);
router.put('/inquiryStatus/update', generalMasters.inquiryStatusUpdate);
router.post('/inquiryStatus/delete', generalMasters.inquiryStatusDelete);

// CRUD routes for 'documentType'
router.post('/documentType/create', generalMasters.documentTypeCreate);
router.get('/documentType/get', generalMasters.documentTypeGet);
router.put('/documentType/update', generalMasters.documentTypeUpdate);
router.post('/documentType/delete', generalMasters.documentTypeDelete);

// CRUD routes for 'flatType'
router.post('/flatType/create', generalMasters.flatTypeCreate);
router.get('/flatType/get', generalMasters.flatTypeGet);
router.put('/flatType/update', generalMasters.flatTypeUpdate);
router.post('/flatType/delete', generalMasters.flatTypeDelete);

// CRUD routes for 'rowhouseType'
router.post('/rowhouseType/create', generalMasters.rowhouseTypeCreate);
router.get('/rowhouseType/get', generalMasters.rowhouseTypeGet);
router.put('/rowhouseType/update', generalMasters.rowhouseTypeUpdate);
router.post('/rowhouseType/delete', generalMasters.rowhouseTypeDelete);

// CRUD routes for 'farmlandType'
router.post('/farmlandType/create', generalMasters.farmlandTypeCreate);
router.get('/farmlandType/get', generalMasters.farmlandTypeGet);
router.put('/farmlandType/update', generalMasters.farmlandTypeUpdate);
router.post('/farmlandType/delete', generalMasters.farmlandTypeDelete);

// CRUD routes for 'leadSource'
router.post('/leadSource/create', generalMasters.leadSourceCreate);
router.get('/leadSource/get', generalMasters.leadSourceGet);
router.put('/leadSource/update', generalMasters.leadSourceUpdate);
router.post('/leadSource/delete', generalMasters.leadSourceDelete);

// CRUD routes for 'projectProgress'
router.post('/projectProgress/create', generalMasters.projectProgressCreate);
router.get('/projectProgress/get', generalMasters.projectProgressGet);
router.put('/projectProgress/update', generalMasters.projectProgressUpdate);
router.post('/projectProgress/delete', generalMasters.projectProgressDelete);

// CRUD routes for 'amenities'
router.post('/amenities/create', generalMasters.amenitiesCreate);
router.get('/amenities/get', generalMasters.amenitiesGet);
router.put('/amenities/update', generalMasters.amenitiesUpdate);
router.post('/amenities/delete', generalMasters.amenitiesDelete);

// CRUD routes for 'inventoryType'
router.post('/inventoryType/create', generalMasters.inventoryTypeCreate);
router.get('/inventoryType/get', generalMasters.inventoryTypeGet);
router.put('/inventoryType/update', generalMasters.inventoryTypeUpdate);
router.post('/inventoryType/delete', generalMasters.inventoryTypeDelete);

// CRUD routes for 'deductionType'
router.post('/deductionType/create', generalMasters.deductionTypeCreate);
router.get('/deductionType/get', generalMasters.deductionTypeGet);
router.put('/deductionType/update', generalMasters.deductionTypeUpdate);
router.post('/deductionType/delete', generalMasters.deductionTypeDelete);


module.exports = router