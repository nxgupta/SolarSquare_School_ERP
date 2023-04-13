const express = require("express");

const { createUser, getAllUsers, getSingleUser, login } = require("../controllers/user.controller");
const { auth,authorizeRoles } = require("../middlewares/auth")

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/", auth, authorizeRoles("admin"), getAllUsers);
router.get("/:id", auth, getSingleUser);

module.exports = router