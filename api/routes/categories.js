const Category = require("../models/Category.js");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
