const express = require("express");
const propertyRouter = require("./propertyRoute");
const consultaRouter = require('./consulta')
const indexRoute = express();

const rootRouter = express.Router();


indexRoute.use("/Inmuebles", propertyRouter)

indexRoute.use("/contacto", consultaRouter)

module.exports = indexRoute;