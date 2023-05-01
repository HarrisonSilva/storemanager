const productService = require('../services/productService');

const getProducts = async (req, res) => {
  const products = await productService.getProducts();
  console.log('products', products);
 return res.status(200).json(products);
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  const products = await productService.getProductsId(id);
  if (products.message) {
    return res.status(404).json(products);
  }
 return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const result = await productService.createProduct(name);
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const result = await productService.getProductsId(id);
  console.log(result);
  if (result.message) {
  return res.status(404).json({ message: 'Product not found' });
  } 
    const getUpdate = await productService.updateProduct(name, id);
    return res.status(200).json(getUpdate);
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
  updateProduct,
};