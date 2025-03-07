const express = require("express");
const mongoose = require( "mongoose")
require( "dotenv").config()
const indexRoute = require("./routes");
const cors = require("cors")
const server = express()



PORT = process.env.port

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };


  //Security Config
server.use(cors(corsOptions));
  
//Routes in Server
server.use("/api", indexRoute);

//Alwais api Redirect
server.get("/", (req, res) => {
  res.redirect("/api");
});


mongoose.connect( process.env.MONGO_CONNECTION , {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
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