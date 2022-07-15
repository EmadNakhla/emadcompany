const express = require("express");
const debug = require('debug')('app:productRouter');
const productModel = require('../models/product');



const productsRouter = express.Router();
var jsonParser = express.json();

productsRouter.get('/', jsonParser, async(req, res) => {
    try {
      const products = await productModel.find({});

      res.render('products', { products });
      //res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }

});

productsRouter.get('/:id', jsonParser, async(req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);
        console.log(id);

        res.render('product', { product });
        //res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }

});

productsRouter.post('/add_product', jsonParser, async(req, res) => {
    console.log(req.body);
    
        const product = new productModel(req.body);
        try {
            await product.save();
            res.send(product);
        } catch (error) {
            res.status(500).send(error);
        }
});
    



module.exports = productsRouter;





