const connection = require('./connection');

const inserProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  await Promise.all(product.map(async (pdr) => {
    await connection.execute(`INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
     VALUES(?, ?, ?);`,
    [insertId, pdr.productId, pdr.quantity]);
  }));
  return { id: insertId, itemsSold: product };
};

module.exports = {
  inserProduct,
    
};