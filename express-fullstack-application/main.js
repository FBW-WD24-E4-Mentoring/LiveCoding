import express from "express";

const PORT = 4000;

const app = express();

/* const users = [
  { name: "Niko", age: 26 },
  { name: "Leon", age: 23 },
];
 */
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: "." });
});

app.get("/users", (req, res) => {
  res.send("response from server");
});

app.listen(PORT, () => console.log("server is running on port ", PORT));
