const mongoose = require('mongoose');
import { ProductSchema } from "../models/models";

const Product = new mongoose.model("Product", ProductSchema);

export const addnewProduct = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });

}