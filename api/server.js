const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

const app = express();
const port = 5000;
//middlewares
app.use(express.json());
app.use(cors());

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

//utils routes
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);

//user routes
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
    connect();
    console.log(`example app listening on port ${port}`);
});
