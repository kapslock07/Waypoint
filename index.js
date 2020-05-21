const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();


mongoose.connect('mongodb://localhost/gamedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use([
  express.urlencoded({ extended: true }),
  express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("🚀  API server now on port", PORT);
});