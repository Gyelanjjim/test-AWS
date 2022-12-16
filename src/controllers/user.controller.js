const userService = require("../services/user.service");

// const getAllUsers = async (req, res) => {

// }
const ok = async (req, res) => {
    return res.status(200).json({message: "Healthy! OK!!"})
}

const getUser = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
      }

    const result = await userService.getUser(id);

    return res.status(200).json( result );
}

// const addUsers = async (req, res) => {
    
// }

// const modifyUsers = async (req, res) => {
    
// }

// const deleteUsers = async (req, res) => {
    
// }

module.exports = { getUser, ok }
