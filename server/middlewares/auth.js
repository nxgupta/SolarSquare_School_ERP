const jwt = require("jsonwebtoken")
const createError = require("http-errors")

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return next(createError.Unauthorized());
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, payload) => {
        if (err) {
            return next(createError.Forbidden("Forbidden"));
        }
        req.payload = payload;
        next();
    });
};

const authorizeRoles = (...roles) => {
    return (req, res, next) => {

        console.log(req.user);
        if (!roles.includes(req.payload.role)) {

            return next(createError.Unauthorized());
        }
        next();
    };
};

module.exports = {
    auth, authorizeRoles
}