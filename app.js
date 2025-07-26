const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const home = require("./routes/valide");
const chapters = require("./routes/chapters");
const connectDB = require("./config/database");
const port = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", home);
app.use("/chapters", chapters);
app.use("/chapters/validate", chapters);

connectDB(process.env.MONGODB_URI)
  .then(() => {
    console.log("Databse connected");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connexion", err);
  });
