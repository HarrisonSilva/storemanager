const productService = require('../services/productService');

const getProducts = async (req, res) => {
  const products = await productService.getProducts();
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

module.exports = {
  getProducts,
  getProductsId,
};