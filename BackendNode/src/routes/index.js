const express = require("express");
const propertyRouter = require("./propertyRoute");

const indexRoute = express();

const rootRouter = express.Router();


indexRoute.use("/Inmuebles", propertyRouter)


module.exports = indexRoute;