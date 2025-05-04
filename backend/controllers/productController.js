import Product from '../models/productModel.js';
import { productValidation } from '../validation/productValidation.js';

// GET all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST a new product
export const createProduct = async (req, res) => {
  const { error } = productValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};
