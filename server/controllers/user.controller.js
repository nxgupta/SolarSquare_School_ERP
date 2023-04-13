const User = require("../models/User")
const createError = require("http-errors");
const generateToken = require("../utils/jwt");

const createUser = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
  
      let user = await User.findOne({ email: email }).exec();
  
      if (user) {
        throw createError.Conflict("User already exists!");
      }
  
      user = new User({ name, email, password });
      user = await user.save();
  
      if (user) {
        res.status(201).json({
          message: "Registration successfully done.",
          user,
        });
      } else {
        throw createError.BadRequest("Invalid user data");
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) throw createError.NotFound("User not found");
  
      const isMatchPassword = await user.isValidPassword(req.body.password);
  
      if (!isMatchPassword)
        throw createError.Unauthorized("Username/password not valid");
  
      const token = await generateToken(user);
  
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
      });
      res.status(200).json({
        message: "Logged in successfully",
        user,
        token,
      });

    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  const getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find().select("-password");
      if (!users) {
        return res.status(404).json("User data not found");
      }
  
      return res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  const getSingleUser = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById({ _id: id }).select(["-password"]);
  
      if (!user) {
        return res.status(404).json(`User not found with this id ${id}`);
      }
  
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = {
    createUser,
    login,
    getAllUsers,
    getSingleUser

}

