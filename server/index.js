const express = require("express");
const { PORT } = require("./constants");
const app = express();

app.use(express.static("public")); //Serves resources from public folder

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
