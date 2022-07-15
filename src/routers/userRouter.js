const express = require("express");
const debug = require('debug')('app:userRouter');
const userModel = require('../models/user');


const userRouter = express.Router();
var jsonParser = express.json();

userRouter.post('/add_user', jsonParser, async(req, res) => {
    console.log(req.body);
    
        const user = new userModel(req.body);
        try {
            await user.save();
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
});
    

  module.exports = userRouter;



