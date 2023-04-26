const productModel = require('../models/productModel');

const getProducts = async () => {
  const products = await productModel.getProducts();
  return products;
};

const getProductsId = async (product) => {
  const productId = await productModel.getProductsId(product);
  if (productId === undefined) {
    return { message: 'Product not found' };
  }
  return productId;
};

module.exports = {
  getProducts,
  getProductsId,
};