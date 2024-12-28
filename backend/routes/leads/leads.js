const LeadsModel = require('../../models/leads');

const leads = {
    createLead: async (req, res) => {
        try {
            const leadData = req.body;
            const newLead = new LeadsModel(leadData);
            await newLead.save();
            
            res.status(201).json(newLead);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllLeads: async (req, res) => {
        try {
            const leads = await LeadsModel.find().populate({ path: 'leadName', select: '-photo' }).populate('sourceOfLeads').populate('projects').populate('intrestedIn').populate('visitInquiryStatus').populate({ path: 'AssignTo', select: '-photo' }).sort({ createdAt: -1 });
            res.json(leads);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getSingleLead: async (req, res) => {
        try {
            const { id } = req.query;
            const lead = await LeadsModel.findById(id).populate('sourceOfLeads').populate('projects').populate('intrestedIn').populate('visitInquiryStatus').populate({ path: 'AssignTo', select: '-photo' });
            if (!lead) {
                return res.status(404).json({ message: "Lead not found" });
            }
            res.json(lead);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateLead: async (req, res) => {
        try {
            const { id } = req.query;
            const update = req.body;
            const options = { new: true };
            const updatedLead = await LeadsModel.findByIdAndUpdate(id, update, options);
            if (!updatedLead) {
                return res.status(404).json({ message: "Lead not found" });
            }
            res.json(updatedLead);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteLead: async (req, res) => {
        try {
            const { id } = req.query;
            const deletedLead = await LeadsModel.findByIdAndDelete(id);
            if (!deletedLead) {
                return res.status(404).json({ message: "Lead not found" });
            }
            res.json({ message: "Lead deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = leads;
