const { appDataSource } = require("./data-source");

const getUser = async (id) => {
    const user = await appDataSource.query(
        `SELECT * 
        FROM users u
        WHERE u.id = ?`
        , [id]
    );
    return user;
}

module.exports = { getUser }