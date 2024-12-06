import express from "express"; //ESM
import { data } from "./main.js";
/* const express = require("express");  */ //CommonJS systax (supported bydault node)

// create our first express server

const server = express();

//handle GET request on /
server.get("/", (req, res) => {
  //request handler or controllers
  res.send("Hi from express server");
});

//handle GET request on /users
server.get("/users", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

//handle GET request on /posts
server.get("/posts", (req, res) => {
  let post = {
    title: "thisis a post",
    id: 1,
  };
  res.send(post);
});

//listen for requests coming on port 3000
server.listen(3000, () => console.log("server is running on port 3000"));
