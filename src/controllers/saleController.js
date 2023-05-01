const salesService = require('../services/saleService');

const inserProduct = async (req, res) => {
  const product = req.body;
  const data = await salesService.inserProduct(product);
  if (data.type) {
    return res.status(404).json(data);
  }
  return res.status(201).json(data);
};

const getSales = async (req, res) => {
  const data = await salesService.getSales(); 
  if (!data) {
    return res.status(404).json({ message: '"Sale not found"' });
  }
  return res.status(200).json(data);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const data = await salesService.getSalesId(id);
  if (!data || data < 1) {
    return res.status(404).json({ message: 'Sale not found' });
  }
 return res.status(200).json(data);
};

module.exports = {
  inserProduct,
  getSales,
  getSalesId,
};