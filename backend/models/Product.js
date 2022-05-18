const { text } = require("express");
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        require: true
    },
    onStock:{
        type: Number,
        require: true
    },
    imageUrl:{
        type: String,
        reqiure: true
    },
    color:{
        type:String
    }
});

const Product = mongoose.model("product",productSchema);

module.exports = Product;