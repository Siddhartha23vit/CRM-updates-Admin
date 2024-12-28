const associateModel = require("../../models/associate");
const fs = require("fs");
const bcrypt = require("bcrypt")
const userModel = require("../../models/user")

async function generateSixDigitNumber() {
    let number;
    let isUnique = false;
    while (!isUnique) {
        number = Math.floor(100000 + Math.random() * 900000);
        const existingRecord = await associateModel.findOne({ uniqueId: number });
        if (!existingRecord) {
            isUnique = true;
        }
    }
    return number;
}

function generateSixCharacterString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&;:,.<>?';
    let result = '';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

const associateController = {
    crateAssociate: async (req, res) => {
        try {
            const {
                registerDate,
                fullName,
                fatherOrHusbandName,
                state,
                city,
                fullAddress,
                dateOfBirth,
                panNo,
                aadhar,
                qualification,
                mobileNumber,
                whatsappNumber,
                emailId,
                commission,
                applicantDesignation,
                role,
                nomineeName,
                nomineeMobileNumber,
                relationWithNominee,
                sponsorBy,
                sponsorMobile,
                sponsorDesignation
            } = req.fields;
            
            if (!fullName || !mobileNumber) {
                return res.status(400).send({ success: false, message: "fullName and mobileNumber are required fields" });
            }
            const { photo } = req.files;
            
            const id =await generateSixDigitNumber()
            const nonHashedPassword = generateSixCharacterString()
            
            const associate = new associateModel({ ...req.fields,uniqueId:id,password:nonHashedPassword });
            if (photo) {
                associate.photo.data = fs.readFileSync(photo.path);
                associate.photo.contentType = photo.type;
            }
            await associate.save();

        const user = await userModel.findOne({ username: emailId })
        if (user) {
            return res.status(400).json({ message: "User already exist please try another email" })
        } else {
            const hashedPassword = await bcrypt.hash(nonHashedPassword, 10);
            const user = new userModel({ username:emailId, password: hashedPassword, mobileNumber, role: 'superAdmin' });
            await user.save();
            res.status(200).json({ message: 'Associate created successfully' });
        }
        } catch (error) {
            res.status(500).send({ success: "false", message: "Something went wrong", error });
        }
    },
    updateAssociate: async (req, res) => {
        try {
            const associateId = req.query.aid;
            const {
                registerDate,
                fullName,
                fatherOrHusbandName,
                state,
                city,
                fullAddress,
                dateOfBirth,
                panNo,
                aadhar,
                qualification,
                mobileNumber,
                whatsappNumber,
                emailId,
                commission,
                applicantDesignation,
                role,
                nomineeName,
                nomineeMobileNumber,
                relationWithNominee,
                sponsorBy,
                sponsorMobile,
                sponsorDesignation
            } = req.fields;

            const existingAssociate = await associateModel.findById(associateId);
            if (!existingAssociate) {
                return res.status(404).send({ success: false, message: "Associate not found" });
            }

            existingAssociate.registerDate = registerDate;
            existingAssociate.fullName = fullName;
            existingAssociate.fatherOrHusbandName = fatherOrHusbandName;
            existingAssociate.state = state;
            existingAssociate.city = city;
            existingAssociate.fullAddress = fullAddress;
            existingAssociate.dateOfBirth = dateOfBirth;
            existingAssociate.panNo = panNo;
            existingAssociate.aadhar = aadhar;
            existingAssociate.qualification = qualification;
            existingAssociate.mobileNumber = mobileNumber;
            existingAssociate.whatsappNumber = whatsappNumber;
            existingAssociate.emailId = emailId;
            existingAssociate.commission = commission;
            existingAssociate.applicantDesignation = applicantDesignation;
            existingAssociate.role = role;
            existingAssociate.nomineeName = nomineeName;
            existingAssociate.nomineeMobileNumber = nomineeMobileNumber;
            existingAssociate.relationWithNominee = relationWithNominee;
            existingAssociate.sponsorBy = sponsorBy;
            existingAssociate.sponsorMobile = sponsorMobile;
            existingAssociate.sponsorDesignation = sponsorDesignation;

            const { photo } = req.files;
            if (photo) {
                existingAssociate.photo.data = fs.readFileSync(photo.path);
                existingAssociate.photo.contentType = photo.type;
            }

            await existingAssociate.save();

            res.status(200).send({ success: true, message: "Associate updated successfully", associate: existingAssociate });
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    },
    getAssociates: async (req, res) => {
        try {
            const associates = await associateModel.find({}).select("-photo");
            if (associates) {
                return res.status(200).send({ success: true, associates });
            } else {
                return res.status(404).send({ success: false, message: "No associates found" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    },
    getSingleAssociate: async (req, res) => {
        try {
            const associateId = req.query.aid;
            const associate = await associateModel.findById(associateId).select("-photo");
            if (associate) {
                return res.status(200).send({ success: true, associate });
            } else {
                return res.status(404).send({ success: false, message: "Associate not found" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    },
    deleteAssociate: async (req, res) => {
        try {
            const associateId = req.query.id;
            const deletedAssociate = await associateModel.findByIdAndDelete(associateId);

            if (!deletedAssociate) {
                return res.status(404).send({ success: false, message: "Associate not found" });
            }

            res.status(200).send({ success: true, message: "Associate deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    },
    getPhoto: async (req, res) => {
        try {
            const associate = await associateModel.findById(req.params.pid).select("photo");
            if (associate.photo.data) {
                res.set("Content-type", associate.photo.contentType);
                return res.status(200).send(associate.photo.data);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: "false",
                message: "Error while getting photo",
                error,
            });
        }
    }
};

module.exports = associateController;
