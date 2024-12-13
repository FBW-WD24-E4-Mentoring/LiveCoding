import express from "express";
import { getIndex, postIndex } from "../controllers/indexControllers.js";

const route = express.Router();

//create endpoint
// GET /
route.get("/", getIndex);

// endpoint
// POST /
route.post("/", postIndex);

export default route;
