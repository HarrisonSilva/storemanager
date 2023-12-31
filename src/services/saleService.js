const saleModel = require('../models/saleModel');
const productModel = require('../models/productModel');

const inserProduct = async (product) => {
  const getProduct = await productModel.getProducts();
  const getProductsId = getProduct.map((pdr) => pdr.id);
  const result = !product.every((id) => getProductsId.includes(id.productId));
  if (result) {
    return {
      type: 404,
      message: 'Product not found',
    };
  }
  const data = await saleModel.inserProduct(product);
  return data;
};

const getSales = async () => {
  const serviceSale = await saleModel.getSales();
  return serviceSale;
};

const getSalesId = async (id) => {
  const serviceSaleId = await saleModel.getSalesId(id);
  return serviceSaleId;
};

module.exports = {
  inserProduct,
  getSales,
  getSalesId,
};