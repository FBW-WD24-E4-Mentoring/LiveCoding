import express from "express";
import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/testing-database");
console.log("DB connected !");

const locationSchema = new mongoose.Schema({
  lat: { type: Number },
  long: { type: Number },
});

const locationCollection = mongoose.model("locations", locationSchema);

const addressSchema = new mongoose.Schema({
  city: { type: String },
  country: { type: String },
  location: { type: mongoose.ObjectId, ref: "locations" },
});

const addressCollection = mongoose.model("addresses", addressSchema);

//embedded document
/* const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
 address: { type: addressSchema },
});
 */
//reference docuement
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  address: { type: mongoose.ObjectId, ref: "addresses" },
  /*   orders:{type:"-----"} */
});

const employeeCollection = mongoose.model("employees", employeeSchema);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.post("/employee", async (req, res) => {
  const employee = await employeeCollection.create(req.body);
  res.send(employee);
});

app.post("/address", async (req, res) => {
  const address = await addressCollection.create(req.body);
  res.send(address);
});

app.post("/location", async (req, res) => {
  const location = await locationCollection.create(req.body);
  res.send(location);
});

app.get("/users", (req, res) => {
  console.log(req.query);
  res.send("received request on user");
});

app.get("/employee", async (req, res) => {
  /*   const employees = await employeeCollection
    .find({})
    .populate("address","-_id -__v"); */

  const { salary, name } = req.query;

  if (salary) {
    const employee = await employeeCollection.find({
      salary: { $gte: salary },
      /*     name: { $regex: `/\${name}/\g` }, */
    });
    return res.send(employee);
  }

  const employees = await employeeCollection.find({}).populate({
    path: "address",
    populate: {
      path: "location",
      model: "locations",
    },
  });
  res.send(employees);
});

/* "/employee/:name/category/:id/:catId"", */
app.get("/employee/:name", (req, res) => {
  const { name } = req.params;

  /*  const { name, id, catId } = req.params;
  console.log(name, id, catId); */
  /*   const paramKeys = Object.keys(req.params);
  for (let key of paramKeys) {
    console.log(key);
    console.log(req.params[key]);
  } */
});

app.listen(3000, () => console.log("server is running"));

//users => orders => products => reviews

/* 
user
{
_id:"sadfsdfsdfsdf345"
useername:"max",
orders: ["adhagjeg23hg42j3g5","§$q34bgk32g4k2g3ik24"]
}


order
{
_id:"23423423453tdfsdfsd",
products: ["dfsyfds8f5s8df8sd","xycggyxzfcyudfz"]
}



product
{
_id:"dfsdfsdr345345345",
title:"iphone ",
reviews: ["asdfadsdf","fcasfcdsfsdf"]
}



//get user populated data
 
usersCollection.find({}).populate({

            path :"orders" 
            populate: {
                        path:"products",
                        model:"products",
                        populate:{
                                    path:"reviews",
                                    model:"reviews"
                                    }
            }

})

*/

// populate at the same level
/* .populate("address","city").populate("orders") */
