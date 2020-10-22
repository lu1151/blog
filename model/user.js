const mongo = require("mongoose");

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

// BlogUser.create({
//     username: "lu1151",
//     email: "luxi.li@outlook.com",
//     password: "12345678",
//     role: "admin",
//     state:0
// }).then(()=>{
//     console.log("Create user succeed");
// }).catch(()=>{
//     console.log("Create user failed");
// })

// export User module
module.exports={
    BlogUser
}