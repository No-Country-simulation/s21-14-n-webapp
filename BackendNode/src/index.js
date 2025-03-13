const express = require("express");
const mongoose = require( "mongoose")

const indexRoute = require("./routes");
const cors = require("cors")
const morgan = require("morgan");

require( "dotenv").config()

const server = express()

server.use(express.json());


PORT = process.env.port
MONGO = process.env.MONGO_CONNECTION

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  server.use(morgan('tiny'));


  //Security Config
server.use(cors(corsOptions));
//Routes in Server
server.use("/api", indexRoute);

//Alwais api Redirect
server.get("/", (req, res) => {
  res.redirect("/api");
});



mongoose.connect( MONGO)
    .then(()=>{
        console.log("Connected to Mongoose server");
        server.listen(PORT, ()=> {
            console.log(`Server listen in http://localhost:${PORT}`);
        });
    })
    .catch(console.error);
    server.on('error',(error)=>{
        console.log('server error', error)
    })