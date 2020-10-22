const express = require("express");

// require BlogUser
const { BlogUser } = require("../model/user");

const admin = express.Router();

admin.get("/login", (req, res) => {
    res.render("admin/login")
})

admin.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render("admin/error", { msg: "Email or password error" });
    }
    let user = await BlogUser.findOne({ email });
    if (user) {
        if (password == user.password) {
            res.send("Logged in")
        } else {
            return res.status(400).render("admin/error", { msg: "Email or password error" });

        }
    } else {
        return res.status(400).render("admin/error", { msg: "Email or password error" });
    }
});

admin.get("/user", (req, res) => {
    res.render("admin/user")
})

module.exports = admin;