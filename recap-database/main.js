import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import UserCollection from "./models/StudentSchema.js";
import CourseCollection from "./models/CourseSchema.js";
import cors from "cors";

config();

const PORT = 4000;

await mongoose.connect(process.env.MONGODB_URL, { dbName: "students" });
console.log("db connection established!");
const app = express();

//use json middleware
app.use(express.json());
// use cors middleware
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    //store req.body into users collection
    /*  const user = new UserCollection(req.body);
    //storing in database
    await user.save(); */
    const user = await UserCollection.create(req.body);
    res.send(user);
  } catch (err) {
    res.send({ error: err.message });
  }
});

//GET /student read all student data
app.get("/student", async (req, res) => {
  try {
    const users = await UserCollection.find();
    res.send(users);
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.listen(PORT, () => console.log("server is running on ", PORT));
