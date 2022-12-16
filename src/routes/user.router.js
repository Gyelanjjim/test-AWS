const routes = require("express").Router();
const userController = require("../controllers/user.controller");

// routes.get("/all", userController.getAllUsers);
routes.get("/ok", userController.ok);
routes.get("/:id", userController.getUser);
// routes.post("", userController.addUser);
// routes.patch("/:id", userController.modifyUser);
// routes.delete("/:id", userController.deleteUser);

module.exports = { routes };