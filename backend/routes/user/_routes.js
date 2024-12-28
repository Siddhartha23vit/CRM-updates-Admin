const express = require('express');
const user = require('./user');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/admin-register', user.adminRegister)
router.post('/register', user.register)
router.post('/login', user.login)
router.get("/getallusers",user.getallusers)
router.get("/user-auth",auth.verifyToken, (req,res)=>{
    res.status(200).send({ok:true})
})
router.get("/admin-auth",auth.verifyToken,auth.isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})



module.exports = router
