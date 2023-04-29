const salesService = require('../services/saleService');

const inserProduct = async (req, res) => {
  const product = req.body;
  const data = await salesService.inserProduct(product);
  if (data.type) {
    return res.status(404).json(data);
  }
  return res.status(201).json(data);
};

module.exports = {
  inserProduct,
};