const jwt = require("jsonwebtoken");
const createError = require("http-errors")

const generateToken = (userInfo) => {
  return new Promise((resolve, reject) => {
    const user = {
      id: userInfo._id,
      email: userInfo.email,
      role: userInfo.role,
    };

    const secret = process.env.ACCESS_TOKEN_SECRET_KEY;
    const options = {
      expiresIn: "2d",
    };
    jwt.sign(user, secret, options, (err, token) => {
      if (err) {
        reject(createError.InternalServerError());
      }
      resolve(token);
    });
  });
};

module.exports = generateToken;