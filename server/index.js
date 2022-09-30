const express = require("express");
const { PORT } = require("./constants");
const app = express();

app.use(express.static("public")); //Serves resources from public folder

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/v", (req, res) => {
  res.json({ v: "1.0.3" });
});

app.get("/version", (req, res) => {
  res.json({ v: "2022.185.0" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
