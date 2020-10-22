const mongo = require("mongoose");

mongo.connect("mongodb+srv://lu1151:8836Mong@cluster0.0i63z.mongodb.net/sample_db?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
)
    .then(() => console.log("Hello Mongodb"))
    .catch(() => console.log("Failed"));