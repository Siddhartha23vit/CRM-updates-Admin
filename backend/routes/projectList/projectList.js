const projectListModel = require("../../models/projectList");
const fs = require("fs");

const projectList = {
  createProjectList: async (req, res) => {
    try {
      const projectList = req.body;
      const newProject = new projectListModel(projectList);

      const savedProject = await newProject.save();
      res.status(201).json({
        message: "Project created successfully",
        project: savedProject,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create project", details: error.message });
    }
  },
  getAllProjectList: async (req, res) => {
    try {
      const projects = await projectListModel.find();
      if (!projects || projects.length === 0) {
        return res.status(404).json({ message: "No projects found" });
      }
      res.status(200).json({ projects });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch projects", details: error.message });
    }
  },
  getSingleProject: async (req, res) => {
    try {
      const projectListId = req.query.projectListId;

      if (!projectListId) {
        return res
          .status(400)
          .json({ error: "Missing projectListId parameter in query" });
      }

      const project = await projectListModel.findOne({ _id: projectListId });

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      res.status(200).json({ project });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch project", details: error.message });
    }
  },
  deleteProjectList: async (req, res) => {
    try {
      const projectListId = req.query.projectListId;

      if (!projectListId) {
        return res
          .status(400)
          .json({ error: "Missing projectListId parameter in query" });
      }

      const deletedProject = await projectListModel.findByIdAndDelete(
        projectListId
      );

      if (!deletedProject) {
        return res.status(404).json({ message: "Project not found" });
      }

      res
        .status(200)
        .json({ message: "Project deleted successfully", deletedProject });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delete project", details: error.message });
    }
  },
  updateProjectList: async (req, res) => {
    try {
      const projectId = req.query.id;
      const { updatedProject } = req.body;

      const updateProjectList = await projectListModel.findByIdAndUpdate(
        projectId,
        updatedProject,
        { new: true }
      );

      if (updateProjectList) {
        return res
          .status(200)
          .send({ message: "Successfully updated", updateProjectList });
      } else {
        return res.status(404).send({ message: "Project not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).send({ message: "Something went wrong", error });
    }
  },

  createBuilding: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingData = req.body.buildingData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      buildingData.forEach(item=>{
        project.buildingList.push(item);
      })
      await project.save();

      res.status(201).json({ message: "Building created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create building", details: error.message });
    }
  },

  updateBuilding: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingName = req.body.buildingName;
      const updatedBuildingData = req.body.updatedBuildingData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      } 

      const building = project.buildingList.find(b => b.buildingName === buildingName);

      if (!building) {
        return res.status(404).json({ message: "Building not found within the project" });
      }

      Object.assign(building, updatedBuildingData);
      await project.save();

      res.status(200).json({ message: "Building updated successfully", updatedBuilding: building });
    } catch (error) {
      res.status(500).json({ error: "Failed to update building", details: error.message });
    }
  },

  createFloorList: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingName = req.body.buildingName;
      const floorData = req.body.floorData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      const building = project.buildingList.find(
        (b) => b.buildingName === buildingName
      );

      if (!building) {
        return res
          .status(404)
          .json({ message: "Building not found within the project" });
      }
      building.floorList.push(floorData);
      await project.save();

      res.status(201).json({ message: "Floor list created successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create floor list", details: error.message });
    }
  },
  updateFloorList:  async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingName = req.body.buildingName;
      const floorName = req.body.floorName;
      const updatedFloorData = req.body.updatedFloorData;
  
      const project = await projectListModel.findById(projectId);
  
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      const building = project.buildingList.find(b => b.buildingName === buildingName);
  
      if (!building) {
        return res.status(404).json({ message: "Building not found within the project" });
      }
  
      const floor = building.floorList.find(f => f.floorName === floorName);
  
      if (!floor) {
        return res.status(404).json({ message: "Floor not found within the building" });
      }
  
      Object.assign(floor, updatedFloorData);
  
      await project.save();
  
      res.status(200).json({ message: "Floor updated successfully", updatedFloor: floor });
    } catch (error) {
      res.status(500).json({ error: "Failed to update floor", details: error.message });
    }
  },
  createFlat: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingName = req.body.buildingName;
      const floorName = req.body.floorName;
      const flatData = req.body.flatData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const building = project.buildingList.find(b => b.buildingName === buildingName);

      if (!building) {
        return res.status(404).json({ message: "Building not found within the project" });
      }

      const floor = building.floorList.find(f => f.floorName === floorName);

      if (!floor) {
        return res.status(404).json({ message: "Floor not found within the building" });
      }
      floor.flatList.push(flatData);

      await project.save();

      res.status(201).json({ message: "Flat added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add flat", details: error.message });
    }
  },

  updateFlat: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const buildingName = req.body.buildingName;
      const floorName = req.body.floorName;
      const flatName = req.body.flatName;
      const updatedFlatData = req.body.updatedFlatData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const building = project.buildingList.find(b => b.buildingName === buildingName);

      if (!building) {
        return res.status(404).json({ message: "Building not found within the project" });
      }

      const floor = building.floorList.find(f => f.floorName === floorName);

      if (!floor) {
        return res.status(404).json({ message: "Floor not found within the building" });
      }

      const flat = floor.flatList.find(f => f.flatName === parseInt(flatName));

      if (!flat) {
        return res.status(404).json({ message: "Flat not found within the floor" });
      }

      Object.assign(flat, updatedFlatData);

      await project.save();

      res.status(200).json({ message: "Flat updated successfully", updatedFlat: flat });
    } catch (error) {
      res.status(500).json({ error: "Failed to update flat", details: error.message });
    }
  },
  createPlot: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const plotData = req.body.plotData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      plotData.forEach(item=>{
        project.plotList.push(item);
      })
      await project.save();

      res.status(201).json({ message: "Building created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create building", details: error.message });
    }
  },

  updatePlot: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const plotName = req.body.plotName;
      const updatedPlotData = req.body.updatedPlotData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const plot = project.plotList.find(b => b.plotName === plotName);

      if (!plot) {
        return res.status(404).json({ message: "plot not found within the project" });
      }

      Object.assign(plot, updatedPlotData);
      await project.save();

      res.status(200).json({ message: "plot updated successfully", updatedplot: plot });
    } catch (error) {
      res.status(500).json({ error: "Failed to update plot", details: error.message });
    }
  },
  createRowHouse: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const rowHouseData = req.body.rowHouseData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });

      }

      rowHouseData.forEach(item=>{
        project.rowHouseList.push(item);
      })
      
      await project.save();

      res.status(201).json({ message: "Row house created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create row house", details: error.message });
    }
  },

  updateRowHouse: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const rowHouseName = req.body.rowHouseName;
      const updatedRowHouseData = req.body.updatedRowHouseData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      const rowHouse = project.rowHouseList.find(rh => rh.rowHouseName === rowHouseName);

      if (!rowHouse) {
        return res.status(404).json({ message: "Row house not found within the project" });
      }
      Object.assign(rowHouse, updatedRowHouseData);
      await project.save();

      res.status(200).json({ message: "Row house updated successfully", updatedRowHouse: rowHouse });
    } catch (error) {
      res.status(500).json({ error: "Failed to update row house", details: error.message });
    }
  },
  createFarmLand: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const farmLandData = req.body.farmLandData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      farmLandData.forEach(item=>{
        project.farmLandList.push(item);
      })

      await project.save();
      
      res.status(201).json({ message: "Farm land created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create farm land", details: error.message });
    }
  },

  updateFarmLand: async (req, res) => {
    try {
      const projectId = req.body.projectId;
      const farmLandName = req.body.farmLandName;
      const updatedFarmLandData = req.body.updatedFarmLandData;

      const project = await projectListModel.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const farmLand = project.farmLandList.find(fl => fl.farmLandName === farmLandName);

      if (!farmLand) {
        return res.status(404).json({ message: "Farm land not found within the project" });
      }

      Object.assign(farmLand, updatedFarmLandData);
      await project.save();

      res.status(200).json({ message: "Farm land updated successfully", updatedFarmLand: farmLand });
    } catch (error) {
      res.status(500).json({ error: "Failed to update farm land", details: error.message });
    }
  }
}

module.exports = projectList;
