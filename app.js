const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const home = require("./routes/valide");

app.use(morgan("combined"));
app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", home);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
