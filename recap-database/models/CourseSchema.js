import { Schema, model } from "mongoose";

const Course = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  students: { type: Number },
  teacher: { type: String, required: true },
});

const CourseCollection = model("courses", Course);
export default CourseCollection;
