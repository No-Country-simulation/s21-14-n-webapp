const express = require("express");
const propertyRouter = require("./propertyRoute");
const consultaRouter = require('./contacto')
const indexRoute = express();
const userRouter = require("./user")



indexRoute.use("/Inmuebles", propertyRouter)

indexRoute.use("/contacto", consultaRouter)

indexRoute.use("/users", userRouter)
module.exports = indexRoute;