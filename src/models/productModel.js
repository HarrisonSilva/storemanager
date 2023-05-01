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

const updateProduct = async (newProduct, productId) => {
   await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [newProduct, productId],
  );
  return { id: productId, name: newProduct };
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
  updateProduct,
};