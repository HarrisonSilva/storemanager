const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
};

const getProductsId = async (productId) => {
  const [[products]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [productId]);
  return products;
};

const createProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [product],
  );
  return {
    id: insertId,
    name: product,
  };
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
};