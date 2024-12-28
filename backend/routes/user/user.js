const User = require('../../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Admin register
const adminRegister = async (req, res) => {
    try {
        const { username, password, firstName, lastName, phoneNumber } = req.body;
        const user = await User.findOne({ username: username })
        if (user) {
            return res.status(400).json({ message: "Admin already exist please try another email" })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword, firstName, lastName, phoneNumber, role: 'superAdmin' });
            await user.save();
            res.status(200).json({ message: 'Admin created successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// User Registration
const register = async (req, res) => {
    try {
        const { username, password, firstName, lastName, phoneNumber } = req.body;
        const user = await User.findOne({ username: username })

        if (user) {
            return res.status(401).json({ message: "user already exist please try another email" })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword, firstName, lastName, phoneNumber, createdDate: new Date() });
            await user.save();
            res.status(200).json({ message: 'User created successfully' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username, deleted: false })
        if (!user) {
            res.status(401).json({ error: 'Authentication failed, invalid username' });
            return;
        }
        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Authentication failed,password does not match' });
            return;
        }
        // Create a JWT token
        const token = jwt.sign({user:user}, 'secret_key');
        res.status(200).send({success:"true",token:token});

    } catch (error) {
        res.status(500).json({success:"false", error: error });
    }
}


const getallusers = async (req, res) => {
    try {
        const users = await User.find({ role: "user" }).select('_id firstName lastName');
        res.status(200).send(users);
        
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

module.exports = { register, login, adminRegister, getallusers }