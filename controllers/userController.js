const User = require("../models/User");

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // ✅ await the query
    res.status(200).json(users); // ✅ return users
  } catch (error) {
    console.log(`Error getting all users: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

// Add New User
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await User.create({ name, email });

    res.status(200).json({
      message: "New user added successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(`Error adding new user: ${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUsers, createUser };
