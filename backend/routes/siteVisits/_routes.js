const express = require('express');
const siteVisits = require("./siteVisits")
const router = express.Router();

router.post('/create-siteVists', siteVisits.createSiteVisit);
router.get('/get-siteVisits', siteVisits.getAllSiteVisit);
router.get('/get-single-siteVisit', siteVisits.getSingleSiteVisit);
router.post('/update-siteVisit', siteVisits.updateSiteVisit);
router.get('/delete-siteVisit', siteVisits.deleteSiteVisit);


module.exports = router


 