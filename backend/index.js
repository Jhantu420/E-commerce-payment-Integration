const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes= require("./route/payment");

// initilize app
const app = express();

// environment veriable
dotenv.config();

// middlewars
app.use(express.json());
app.use(cors());
// routes
app.use("/api/payment/",paymentRoutes)
// app listening
const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`listning on port ${port}...`));