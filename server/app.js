const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const path = require("path");
require("dotenv").config();
const userRoutes = require("./routes/user.routes")
const studentRoutes = require("./routes/student.routes")


const PORT = process.env.PORT || 5000;
const app = express();

const corsOption = {
  credentials: true,
};
// apply middlewares
// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));


// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cookieParser());


// routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server connection established",
  });
});

app.use("/user", userRoutes)
app.use("/student", studentRoutes)

app.use("*", (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}... `));
  } catch (error) {
    console.log(error.message);
  }
};

start();