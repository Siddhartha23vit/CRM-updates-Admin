const markattendence=require("../../models/attendancemark");

const MarkAttendence={
    createProjectDemand :async (req, res) => {
        try {
            const markAttendence = new markattendence(req.body);
            await markAttendence.save();
            res.status(201).send(markAttendence);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    getAllProjectDemands :async (req, res) => {
        try {
            const markAttendence = await markattendence.find();
            res.status(200).send(markAttendence);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    
    getSingleProjectDemand :async (req, res) => {
        try {
            const markAttendence = await markattendence.findById(req.query.id);
            if (!markAttendence) {
                return res.status(404).send();
            }
            res.status(200).send(markAttendence);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    
updateProjectDemand: async (req, res) => {
    try {
        const markAttendence = await markattendence.findByIdAndUpdate(req.query.id, req.body, { new: true, runValidators: true });
        if (!markAttendence) {
            return res.status(404).send();
        }
        res.status(200).send(markAttendence);
    } catch (error) {
        res.status(400).send(error);
    }
},

deleteProjectDemand: async (req, res) => {
    try {
        const markAttendence = await markattendence.findByIdAndDelete(req.query.id);
        if (!markAttendence) {
            return res.status(404).send();
        }
        res.status(200).send(markAttendence);
    } catch (error) {
        res.status(400).send(error);
    }
}
           
}

module.exports = MarkAttendence