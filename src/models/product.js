const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,        
    // },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        //default: 0,
    },
    image:
    {
        type: String,
    },
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;