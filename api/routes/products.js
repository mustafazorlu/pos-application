const Product = require("../models/Product.js");
const express = require("express");

const router = express.Router();

router.get("/get-all", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
});

//add product
router.post("/add-product", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json("Item added");
    } catch (error) {
        res.status(400).json(error);
    }
});

//update
router.put("/update-product", async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.status(200).json("Item updated");
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete
router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.body._id });
        res.status(200).json("Item deleted");
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
