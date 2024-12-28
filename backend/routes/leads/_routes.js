const express = require('express');
const leads = require("./leads")
const router = express.Router();

router.post('/create-leads', leads.createLead);
router.get('/get-leads', leads.getAllLeads);
router.get('/get-single-lead', leads.getSingleLead);
router.post('/update-lead', leads.updateLead);
router.get('/delete-lead', leads.deleteLead);


module.exports = router