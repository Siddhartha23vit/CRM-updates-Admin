const amenitiesModel = require("../../models/amenities");
const bankModel = require("../../models/bank");
const chargesModel = require("../../models/charges");
const cityModel = require("../../models/city");
const deductiontypeModel = require("../../models/deductionType");
const designationModel = require("../../models/designation");
const directionModel = require("../../models/direction");
const documenttypeModel = require("../../models/document-type");
const facingModel = require("../../models/facing");
const farmlandtypeModel = require("../../models/farmland-type");
const flattypeModel = require("../../models/flat-type");
const inquirystatusModel = require("../../models/inquiry-status");
const inventorytypeModel = require("../../models/inventory-type");
const leadsourceModel = require("../../models/lead-source");
const projectprogressModel = require("../../models/project-progress");
const rowhousetypeModel = require("../../models/rowhouse-type");
const usertypeModel = require("../../models/user-type");


const generalMasters = {
    designationCreate: async (req, res) => {
        try {
            const { designationName, designationAlias, status } = req.body;
            const newDesignation = await designationModel.create({ designationName, designationAlias, status });
            res.status(201).json({ success: true, message: "Designation created successfully", data: newDesignation });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    designationGet: async (req, res) => {
        try {
            const designations = await designationModel.find();
            res.status(200).json({ success: true, data: designations });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    designationUpdate: async (req, res) => {
        try {
            const { id, designationName, designationAlias, status } = req.body;
            await designationModel.findByIdAndUpdate(id, { designationName, designationAlias, status });
            res.status(200).json({ success: true, message: "Designation updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    designationDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await designationModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Designation deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    bankCreate: async (req, res) => {
        try {
            const { bankName, contactPerson, mobileNumber, status,bankAlias } = req.body;
            const newBank = await bankModel.create({ bankName, contactPerson, mobileNumber, status,bankAlias });
            res.status(201).json({ success: true, message: "Bank created successfully", data: newBank });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    bankGet: async (req, res) => {
        try {
            const banks = await bankModel.find();
            res.status(200).json({ success: true, data: banks });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    bankUpdate: async (req, res) => {
        try {
            const { id, bankName, contactPerson, mobileNumber, bankAlias, status } = req.body;
            await bankModel.findByIdAndUpdate(id, { bankName, contactPerson, mobileNumber, status,bankAlias });
            res.status(200).json({ success: true, message: "Bank updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    bankDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await bankModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Bank deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    
    userTypeCreate: async (req, res) => {
        try {
            const { type, backOffice, status } = req.body;
            const newUserType = await usertypeModel.create({ type, backOffice, status });
            res.status(201).json({ success: true, message: "User type created successfully", data: newUserType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    userTypeGet: async (req, res) => {
        try {
            const userTypes = await usertypeModel.find();
            res.status(200).json({ success: true, data: userTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    userTypeUpdate: async (req, res) => {
        try {
            const { id, type, backOffice, status } = req.body;
            await usertypeModel.findByIdAndUpdate(id, { type, backOffice, status });
            res.status(200).json({ success: true, message: "User type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    userTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await usertypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "User type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    cityCreate: async (req, res) => {
        try {
            const { state, city, status } = req.body;
            const newCity = await cityModel.create({ state, city, status });
            res.status(201).json({ success: true, message: "City created successfully", data: newCity });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    cityGet: async (req, res) => {
        try {
            const cities = await cityModel.find();
            res.status(200).json({ success: true, data: cities });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    cityUpdate: async (req, res) => {
        try {
            const { id, state, city, status } = req.body;
            await cityModel.findByIdAndUpdate(id, { state, city, status });
            res.status(200).json({ success: true, message: "City updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    cityDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await cityModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "City deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    chargesCreate: async (req, res) => {
        try {
            const { chargeName, chargeAlias, chargeType, status } = req.body;
            const newCharge = await chargesModel.create({ chargeName, chargeAlias, chargeType, status });
            res.status(201).json({ success: true, message: "Charge created successfully", data: newCharge });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    
    chargesGet: async (req, res) => {
        try {
            const charges = await chargesModel.find();
            res.status(200).json({ success: true, data: charges });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    chargesUpdate: async (req, res) => {
        try {
            const { id, chargeName, chargeAlias, chargeType, status } = req.body;
            await chargesModel.findByIdAndUpdate(id, { chargeName, chargeAlias, chargeType, status });
            res.status(200).json({ success: true, message: "Charge updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    chargesDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await chargesModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Charge deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'facing'
    facingCreate: async (req, res) => {
        try {
            const { facing, facingAlias, status } = req.body;
            const newFacing = await facingModel.create({ facing, facingAlias, status });
            res.status(201).json({ success: true, message: "Facing created successfully", data: newFacing });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    facingGet: async (req, res) => {
        try {
            const facings = await facingModel.find();
            res.status(200).json({ success: true, data: facings });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    facingUpdate: async (req, res) => {
        try {
            const { id, facing, facingAlias, status } = req.body;
            await facingModel.findByIdAndUpdate(id, { facing, facingAlias, status });
            res.status(200).json({ success: true, message: "Facing updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    facingDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await facingModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Facing deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'direction'
    directionCreate: async (req, res) => {
        try {
            const { direction, directionAlias, status } = req.body;
            const newDirection = await directionModel.create({ direction, directionAlias, status });
            res.status(201).json({ success: true, message: "Direction created successfully", data: newDirection });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    directionGet: async (req, res) => {
        try {
            const directions = await directionModel.find();
            res.status(200).json({ success: true, data: directions });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    directionUpdate: async (req, res) => {
        try {
            const { id, direction, directionAlias, status } = req.body;
            await directionModel.findByIdAndUpdate(id, { direction, directionAlias, status });
            res.status(200).json({ success: true, message: "Direction updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    directionDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await directionModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Direction deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    inquiryStatusCreate: async (req, res) => {
        try {
            const { inquiryStatus, inquiryAlias, stageType, status } = req.body;
            const newInquiryStatus = await inquirystatusModel.create({ inquiryStatus, inquiryAlias, stageType, status });
            res.status(201).json({ success: true, message: "Inquiry status created successfully", data: newInquiryStatus });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inquiryStatusGet: async (req, res) => {
        try {
            const inquiryStatuses = await inquirystatusModel.find();
            res.status(200).json({ success: true, data: inquiryStatuses });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inquiryStatusUpdate: async (req, res) => {
        try {
            const { id, inquiryStatus, inquiryAlias, stageType, status } = req.body;
            await inquirystatusModel.findByIdAndUpdate(id, { inquiryStatus, inquiryAlias, stageType, status });
            res.status(200).json({ success: true, message: "Inquiry status updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inquiryStatusDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await inquirystatusModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Inquiry status deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'documentType'
    documentTypeCreate: async (req, res) => {
        try {
            const { documentType, documentAlias, status } = req.body;
            const newDocumentType = await documenttypeModel.create({ documentType, documentAlias, status });
            res.status(201).json({ success: true, message: "Document type created successfully", data: newDocumentType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    documentTypeGet: async (req, res) => {
        try {
            const documentTypes = await documenttypeModel.find();
            res.status(200).json({ success: true, data: documentTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    documentTypeUpdate: async (req, res) => {
        try {
            const { id, documentType, documentAlias, status } = req.body;
            await documenttypeModel.findByIdAndUpdate(id, { documentType, documentAlias, status });
            res.status(200).json({ success: true, message: "Document type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    documentTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await documenttypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Document type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    flatTypeCreate: async (req, res) => {
        try {
            const { flatType, flatTypeAlias, status } = req.body;
            const newFlatType = await flattypeModel.create({ flatType, flatTypeAlias, status });
            res.status(201).json({ success: true, message: "Flat type created successfully", data: newFlatType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    flatTypeGet: async (req, res) => {
        try {
            const flatTypes = await flattypeModel.find();
            res.status(200).json({ success: true, data: flatTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    flatTypeUpdate: async (req, res) => {
        try {
            const { id, flatType, flatTypeAlias, status } = req.body;
            await flattypeModel.findByIdAndUpdate(id, { flatType, flatTypeAlias, status });
            res.status(200).json({ success: true, message: "Flat type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    flatTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await flattypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Flat type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'rowhouseType'
    rowhouseTypeCreate: async (req, res) => {
        try {
            const { rowhouseType, rowhouseAlias, status } = req.body;
            const newRowhouseType = await rowhousetypeModel.create({ rowhouseType, rowhouseAlias, status });
            res.status(201).json({ success: true, message: "Rowhouse type created successfully", data: newRowhouseType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    rowhouseTypeGet: async (req, res) => {
        try {
            const rowhouseTypes = await rowhousetypeModel.find();
            res.status(200).json({ success: true, data: rowhouseTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    rowhouseTypeUpdate: async (req, res) => {
        try {
            const { id, rowhouseType, rowhouseAlias, status } = req.body;
            await rowhousetypeModel.findByIdAndUpdate(id, { rowhouseType, rowhouseAlias, status });
            res.status(200).json({ success: true, message: "Rowhouse type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    rowhouseTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await rowhousetypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Rowhouse type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    farmlandTypeCreate: async (req, res) => {
        try {
            const { farmlandType, farmlandAlias, status } = req.body;
            const newFarmlandType = await farmlandtypeModel.create({ farmlandType, farmlandAlias, status });
            res.status(201).json({ success: true, message: "Farmland type created successfully", data: newFarmlandType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    farmlandTypeGet: async (req, res) => {
        try {
            const farmlandTypes = await farmlandtypeModel.find();
            res.status(200).json({ success: true, data: farmlandTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    farmlandTypeUpdate: async (req, res) => {
        try {
            const { id, farmlandType, farmlandAlias, status } = req.body;
            await farmlandtypeModel.findByIdAndUpdate(id, { farmlandType, farmlandAlias, status });
            res.status(200).json({ success: true, message: "Farmland type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    farmlandTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await farmlandtypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Farmland type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'leadSource'
    leadSourceCreate: async (req, res) => {
        try {
            const { leadSourceType, leadSourceAlias, status } = req.body;
            const newLeadSourceType = await leadsourceModel.create({ leadSourceType, leadSourceAlias, status });
            res.status(201).json({ success: true, message: "Lead source created successfully", data: newLeadSourceType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    leadSourceGet: async (req, res) => {
        try {
            const leadSourceTypes = await leadsourceModel.find();
            res.status(200).json({ success: true, data: leadSourceTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    leadSourceUpdate: async (req, res) => {
        try {
            const { id, leadSourceType, leadSourceAlias, status } = req.body;
            await leadsourceModel.findByIdAndUpdate(id, { leadSourceType, leadSourceAlias, status });
            res.status(200).json({ success: true, message: "Lead source updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    leadSourceDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await leadsourceModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Lead source deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    projectProgressCreate: async (req, res) => {
        try {
            const { projectprogressType, progress, projectprogressAlias, status } = req.body;
            const newProjectProgressType = await projectprogressModel.create({ projectprogressType, progress, projectprogressAlias, status });
            res.status(201).json({ success: true, message: "Project progress created successfully", data: newProjectProgressType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    projectProgressGet: async (req, res) => {
        try {
            const projectProgressTypes = await projectprogressModel.find();
            res.status(200).json({ success: true, data: projectProgressTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    projectProgressUpdate: async (req, res) => {
        try {
            const { id, projectprogressType, progress, projectprogressAlias, status } = req.body;
            await projectprogressModel.findByIdAndUpdate(id, { projectprogressType, progress, projectprogressAlias, status });
            res.status(200).json({ success: true, message: "Project progress updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    projectProgressDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await projectprogressModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Project progress deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'amenities'
    amenitiesCreate: async (req, res) => {
        try {
            const { amenityType, amenity, amenityAlias, status } = req.body;
            const newAmenityType = await amenitiesModel.create({ amenityType, amenity, amenityAlias, status });
            res.status(201).json({ success: true, message: "Amenity created successfully", data: newAmenityType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    amenitiesGet: async (req, res) => {
        try {
            const amenityTypes = await amenitiesModel.find();
            res.status(200).json({ success: true, data: amenityTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    amenitiesUpdate: async (req, res) => {
        try {
            const { id, amenityType, amenity, amenityAlias, status } = req.body;
            await amenitiesModel.findByIdAndUpdate(id, { amenityType, amenity, amenityAlias, status });
            res.status(200).json({ success: true, message: "Amenity updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    amenitiesDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await amenitiesModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Amenity deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
    inventoryTypeCreate: async (req, res) => {
        try {
            const { inventoryType, unitType, status } = req.body;
            const newInventoryType = await inventorytypeModel.create({ inventoryType, unitType, status });
            res.status(201).json({ success: true, message: "Inventory type created successfully", data: newInventoryType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inventoryTypeGet: async (req, res) => {
        try {
            const inventoryTypes = await inventorytypeModel.find();
            res.status(200).json({ success: true, data: inventoryTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inventoryTypeUpdate: async (req, res) => {
        try {
            const { id, inventoryType, unitType, status } = req.body;
            await inventorytypeModel.findByIdAndUpdate(id, { inventoryType, unitType, status });
            res.status(200).json({ success: true, message: "Inventory type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    inventoryTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await inventorytypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Inventory type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    // CRUD routes for 'deductionType'
    deductionTypeCreate: async (req, res) => {
        try {
            const { deductionName, deductionPercentage, deductionType, status } = req.body;
            const newDeductionType = await deductiontypeModel.create({ deductionName, deductionPercentage, deductionType, status });
            res.status(201).json({ success: true, message: "Deduction type created successfully", data: newDeductionType });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    deductionTypeGet: async (req, res) => {
        try {
            const deductionTypes = await deductiontypeModel.find();
            res.status(200).json({ success: true, data: deductionTypes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    deductionTypeUpdate: async (req, res) => {
        try {
            const { id, deductionName, deductionPercentage, deductionType, status } = req.body;
            await deductiontypeModel.findByIdAndUpdate(id, { deductionName, deductionPercentage, deductionType, status });
            res.status(200).json({ success: true, message: "Deduction type updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },

    deductionTypeDelete: async (req, res) => {
        try {
            const { id } = req.body;
            await deductiontypeModel.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Deduction type deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    },
}


module.exports = generalMasters