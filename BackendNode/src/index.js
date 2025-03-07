import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import indexRoute from "./routes";

const server = express()

dotenv.config();

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


mongoose.connect()
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