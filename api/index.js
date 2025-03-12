const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/come", (req, res) => {
    res.render("index.ejs");
});

app.post("/response", (req, res) => {
    res.render("response.ejs");
});

// Export the app for Vercel
module.exports = app;
