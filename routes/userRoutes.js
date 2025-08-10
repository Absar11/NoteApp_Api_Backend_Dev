const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const router = express.Router();

router.get("/getuser", getUsers);
router.post("/createuser", createUser);

module.exports = router;
