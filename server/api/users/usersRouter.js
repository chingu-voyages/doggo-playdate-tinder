const { Router } = require("express");
const { register, login, logout, getProfile } = require("./usersController");

const usersRouter = Router();

// users
usersRouter.route("/register").post(register);
usersRouter.route("/login").post(login);
usersRouter.route("/logout").post(logout);
usersRouter.route("/profile").get(getProfile);
usersRouter.route("/profile/:id").get(getProfile);

module.exports = usersRouter;
