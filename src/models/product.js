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
    Image:
    {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        //default: 0,
    },
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;