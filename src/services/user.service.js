const userDao = require("../models/user.dao");

const getUser = async (id) => {
    return await userDao.getUser(id);
}

module.exports = { getUser }