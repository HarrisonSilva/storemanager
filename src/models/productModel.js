const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
};

const getProductsId = async (productId) => {
  const eoq = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [productId]);
    console.log(eoq);
  
  const [[products]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [productId]);
  return products;
};

module.exports = {
  getProducts,
  getProductsId,
};