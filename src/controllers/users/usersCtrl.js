const expressAsyncHandler = require('express-async-handler');
const User = require("../../model/User");

//Register
const registerUser = expressAsyncHandler(
    async (req, res) => {
        const {email, firstname, lastname, password} =  req?.body;
        
        //check if the user is already registered
        const userExists = await User.findOne({ email });
        if (userExists) throw new Error("User already exists");
            
    
        try {
            const user = await User.create({ email, firstname, lastname, password});
            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
    }
);

//fetch all users

const fetchUsersCtrl = expressAsyncHandler(
    async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.json(error);
        }
    }
);

module.exports = {registerUser, fetchUsersCtrl};
