const User = require('../schema/user-schema.js');

const getUser = async (req, res) =>{
    try {
        const users = await User.find({});  // find all data from database
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while getting data", error);
    }
}

module.exports = {getUser};