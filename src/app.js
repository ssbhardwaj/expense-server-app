const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();

//env
// dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;