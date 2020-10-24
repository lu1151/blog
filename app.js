const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");


// create server
const app = express();

// conncet to mongodb
require("./model/connect")

// get data from post
app.use(bodyParser.urlencoded({ extended: false }));

// set session
app.use(session({
    secret: "secret key",
    resave: true,
    saveUninitialized: true
}));

// set template path
app.set("views", path.join(__dirname, "views"));

// set template file extension
app.set("view engine", "art");

app.engine("art", require("express-art-template"));

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// require routes
const home = require("./route/home");
const admin = require("./route/admin");
const { extension } = require("art-template");

// Intercept requests
app.use("/admin", (req, res, next) => {
    if (req.url != "/login" && !req.session.username) {
        res.redirect("/admin/login");
    } else {
        next();
    }
})

app.use("/home", home);
app.use("/admin", admin);

// listen
app.listen(80);
console.log("Hello app");