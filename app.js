const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index")

const app = express();

// Setuo
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Public files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening at port ${PORT}.`));