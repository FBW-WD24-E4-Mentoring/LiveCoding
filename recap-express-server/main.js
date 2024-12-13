import express from "express"; //ESM
import { logger } from "./middlewares/logger.js";
import indexRoute from "./routes/indexRoutes.js";
/* const express = require("express")  */ //CommonJS

//create server
const app = express();
//port 3000
const PORT = 3000;
// middleware in express
// middleware is function which has access to request, response and next function.
// middleware can send back response to client or forward your request to next handler
app.use(logger);

//use express json middleware
app.use(express.json());
/* app.use(logger); */
//external middleware // just forward your request

//serve static files using express middleware
app.use(express.static("views"));

app.use("/", indexRoute);

//listening request on port 3000
app.listen(PORT, () => console.log("server is running on port ", PORT));

//MVC design architecture
// M stands for Models(database related stuff)
// V stands for Views (presentainal, layout,frontend code)
// C stands Controllers
