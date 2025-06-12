import Product from "../models/ProductSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.massage || "Serverda xatolik yuz berdi");
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Mahsulot topilmadi" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message || "Serverda xatolik yuz berdi");
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json(error.message || "Serverda xatolik yuz berdi");
  }
};
