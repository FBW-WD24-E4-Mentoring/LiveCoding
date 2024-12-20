/* schema is a structure of your document */
/* How your docuement will look like */

/* {
    name:"Joseph",
    age:23,
    address:{
        city:"berlin",
        country:"germnay"    
    },
    course:"Web Dev"
} */

import { Schema, model } from "mongoose";

const Student = new Schema({
  name: { type: String, maxLength: 10, required: true },
  age: { type: Number },
  address: { type: Object },
  course: { type: String },
});

//create model/collection
//model is a class through which you can interact with your collection
const UserCollection = model("users", Student);

export default UserCollection;
