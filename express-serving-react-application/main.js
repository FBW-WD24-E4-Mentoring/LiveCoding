import express from "express";

const PORT = 4000;

const app = express();

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.get("/users", (req, res) => {
  res.send("response from server");
});

app.listen(PORT, () => console.log("server is running on port ", PORT));
