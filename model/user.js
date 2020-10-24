const mongo = require("mongoose");
const bcrypt = require("bcrypt");

// create schema
const userSchema = mongo.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin or normal
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        // 0 is active, 1 is inactive
        default: 0
    }
})

// create set
const BlogUser = mongo.model("BlogUser", userSchema);

// async function createUser() {
//     const salt = await bcrypt.genSalt(10);
//     const pwd = await bcrypt.hash("12345678", salt);
//     const user = await BlogUser.create({
//         username: "lu1151",
//         email: "luxi.li@outlook.com",
//         password: pwd,
//         role: "admin",
//         state: 0
//     });
// }

// createUser();

// export User module
module.exports = {
    BlogUser
}