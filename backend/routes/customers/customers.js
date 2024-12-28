const customerModel = require("../../models/customer")
const fs = require("fs")

const customers = {
    registerCustomers: async(req,res)=>{
        try {
            const {fullName,mobileNumber,whatsappNumber,registerDate,fatherName,state,city,fullAddress,profession,emailId,dateOfBirth,anniversary,gender,bloodGroup,panNumber} = await req.fields

            if (!fullName || !mobileNumber) {
                return res.status(400).send({ success: false, message: "fullName and mobileNumber are required fields" });
            }

            const {photo} = await req.files

            const product = new customerModel({...req.fields})
            if(photo){
                product.photo.data = fs.readFileSync(photo.path)
                product.photoContentType = photo.type
            }
            await product.save()
            res.status(200).send({success:"true",messege:"customer created successfully"})

        } catch (error) {
            console.log(error)
            res.status(500).send({success:"false",messege:"something went wrong"})
        }
    },
    updateCustomer: async(req,res)=>{
        try {
            const customerId = req.query.cid;
            const {
                fullName,
                mobileNumber,
                whatsappNumber,
                registerDate,
                fatherName,
                state,
                city,
                fullAddress,
                profession,
                emailId,
                dateOfBirth,
                anniversary,
                gender,
                bloodGroup,
                panNumber
            } = req.fields;
    
            const existingCustomer = await customerModel.findById(customerId);
            if (!existingCustomer) {
                return res.status(404).send({ success: false, message: "Customer not found" });
            }

            existingCustomer.fullName = fullName;
            existingCustomer.mobileNumber = mobileNumber;
            existingCustomer.whatsappNumber = whatsappNumber;
            existingCustomer.registerDate = registerDate;
            existingCustomer.fatherName = fatherName;
            existingCustomer.state = state;
            existingCustomer.city = city;
            existingCustomer.fullAddress = fullAddress;
            existingCustomer.profession = profession;
            existingCustomer.emailId = emailId;
            existingCustomer.dateOfBirth = dateOfBirth;
            existingCustomer.anniversary = anniversary;
            existingCustomer.gender = gender;
            existingCustomer.bloodGroup = bloodGroup;
            existingCustomer.panNumber = panNumber;
    
            const { photo } = req.files;
            if (photo) {
                existingCustomer.photo.data = fs.readFileSync(photo.path);
                existingCustomer.photoContentType = photo.type;
            }

            await existingCustomer.save();
    
            res.status(200).send({ success: true, message: "Customer updated successfully", customer: existingCustomer });
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    },
    photoControler: async(req,res)=>{
        try {
            const customer = await customerModel.findById(req.params.pid).select("photo");
            if (customer.photo.data) {
              res.set("Content-type", customer.photo.contentType);
              return res.status(200).send(customer.photo.data);
            }
          } catch (error) {
            console.log(error);
            res.status(500).send({
              success: "false",
              message: "Erorr while getting photo",
              error,
            });
          }
    },
    getAllCustomers: async(req,res)=>{
        try {
            const customers = await customerModel.find({}).select("-photo").populate('city')
            if(customers){
                return res.status(200).send({status:"true",customers})
            }
          } catch (error) {
            res.status(200).send({success:"false",messege:"no customers found"})
          }
    },
    deleteCustomers: async (req, res) => {
        try {
            const customerId = req.query.id;
            const deletedCustomer = await customerModel.findByIdAndDelete(customerId);

            if (!deletedCustomer) {
                return res.status(404).send({ success: false, message: "Customer not found" });
            }

            res.status(200).send({ success: true, message: "Customer deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Something went wrong" });
        }
    }
}



module.exports = customers