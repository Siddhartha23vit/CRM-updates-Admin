const SiteVisitModel = require('../../models/siteVisit');

const siteVisits = {
    createSiteVisit: async (req, res) => {
        try {
            const siteVisitData = req.body;
            const newSiteVisit = new SiteVisitModel(siteVisitData);
            await newSiteVisit.save();
            
            res.status(201).json(newSiteVisit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllSiteVisit: async (req, res) => {
        try {
            const siteVisits = await SiteVisitModel.find().populate('lead').populate({ path: 'leadName', select: '-photo' }).populate('sourceOfLeads').populate('projects').populate('intrestedIn').populate('visitInquiryStatus').populate({ path: 'AssignTo', select: '-photo' });
            res.json(siteVisits);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getSingleSiteVisit: async (req, res) => {
        try {
            const { id } = req.query;
            const siteVisit = await SiteVisitModel.findById(id).populate('lead').populate({ path: 'leadName', select: '-photo' }).populate('sourceOfLeads').populate('projects').populate('intrestedIn').populate('visitInquiryStatus').populate({ path: 'AssignTo', select: '-photo' });
            if (!siteVisit) {
                return res.status(404).json({ message: "Site visit not found" });
            }
            res.json(siteVisit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateSiteVisit: async (req, res) => {
        try {
            const { id } = req.query;
            const update = req.body;
            const options = { new: true };
            const updatedSiteVisit = await SiteVisitModel.findByIdAndUpdate(id, update, options);
            if (!updatedSiteVisit) {
                return res.status(404).json({ message: "Site visit not found" });
            }
            res.json(updatedSiteVisit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteSiteVisit: async (req, res) => {
        try {
            const { id } = req.query;
            const deletedSiteVisit = await SiteVisitModel.findByIdAndDelete(id);
            if (!deletedSiteVisit) {
                return res.status(404).json({ message: "Site visit not found" });
            }
            res.json({ message: "Site visit deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = siteVisits;
