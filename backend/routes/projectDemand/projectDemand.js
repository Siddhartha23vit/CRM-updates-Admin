const ProjectDemand = require('../../models/projectDemand');


const projectdemand={
createProjectDemand :async (req, res) => {
    try {
        const projectDemand = new ProjectDemand(req.body);
        await projectDemand.save();
        res.status(201).send(projectDemand);
    } catch (error) {
        res.status(400).send(error);
    }
},

getAllProjectDemands :async (req, res) => {
    try {
        const projectDemands = await ProjectDemand.find();
        res.status(200).send(projectDemands);
    } catch (error) {
        res.status(400).send(error);
    }
},

getSingleProjectDemand :async (req, res) => {
    try {
        const projectDemand = await ProjectDemand.findById(req.query.id);
        if (!projectDemand) {
            return res.status(404).send();
        }
        res.status(200).send(projectDemand);
    } catch (error) {
        res.status(400).send(error);
    }
},

updateProjectDemand: async (req, res) => {
    try {
        const projectDemand = await ProjectDemand.findByIdAndUpdate(req.query.id, req.body, { new: true, runValidators: true });
        if (!projectDemand) {
            return res.status(404).send();
        }
        res.status(200).send(projectDemand);
    } catch (error) {
        res.status(400).send(error);
    }
},

deleteProjectDemand: async (req, res) => {
    try {
        const projectDemand = await ProjectDemand.findByIdAndDelete(req.query.id);
        if (!projectDemand) {
            return res.status(404).send();
        }
        res.status(200).send(projectDemand);
    } catch (error) {
        res.status(400).send(error);
    }
}
}
module.exports=projectdemand