import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import ProductModel from "../models/ProductModel.js";
import  message  from 'statuses';

// POST: /api/product
export const insertProduct = async (req, res) => {
  try {
    const { name, image, category, new_price, old_price, available } = req.body;
    
    const products = await ProductModel.find({})
    let id;
    if (products.length > 0) {
      const last_product_arry = products.slice(-1);
      let lat_product = last_product_arry[0];
      id = lat_product.id +1;
    }
    else {
      id = 1;
    }
    const newProduct = new ProductModel({
      id: id,
      name,
      image,
      category,
      new_price,
      old_price,
      available,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product inserted successfully",
      product: savedProduct.name,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error inserting product",
      error: error.message,
    });
  }
};

// GET: /api/products
 export const retrieveAllProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

// GET: /api/product/:id
 export const retrieveProduct = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product",
      error: error.message,
    });
  }
};

    // DELETE: /api/removeproduct/:id
export const removeProduct = async (req, res) => {
  try {
    const reProduct = await ProductModel.findOneAndDelete({ id: req.params.id });

    if (!reProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found."
      });
    }

    res.json({
      success: true,
      message: `The item "${reProduct.name}" was deleted successfully!`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default {
  insertProduct,
  retrieveAllProduct,
  retrieveProduct,
  removeProduct
};
