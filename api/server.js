const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//routes
const categoryRoute = require("./routes/categories.js");

dotenv.config();

const app = express();
const port = 5000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");
    } catch (e) {
        console.log(e.message);
    }
};

// app.get("/", (req, res) => {
//     res.send("selam");
// });

app.use("/api", categoryRoute);

app.listen(port, () => {
    connect();
    console.log(`example app listening on port ${port}`);
});
