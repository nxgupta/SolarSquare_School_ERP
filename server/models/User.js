const mongoose = require("mongoose")
const validator  = require("validator")
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
    maxLength: 30,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
    maxLength: 80,
    validate: [validator.isEmail, "Please enter the valid email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [8, "Password should be greater than 8 characters"],
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
    required: true
},

  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function (oldPassword) {
  return await bcrypt.compare(oldPassword, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports =  User;