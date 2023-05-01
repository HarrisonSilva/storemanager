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

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId, quantity
FROM StoreManager.sales AS sl INNER JOIN StoreManager.sales_products
AS spdt ON sl.id = spdt.sale_id ORDER BY id ASC;`,
  );
  return sales;
};

const getSalesId = async (id) => {
  const [sales] = await connection.execute(
    `SELECT date, product_id AS productId, quantity
    FROM StoreManager.sales AS sl INNER JOIN StoreManager.sales_products
    AS spdt ON sl.id = spdt.sale_id  WHERE id = ? ORDER BY id ASC;`,
    [id],
  );
  return sales;
};

module.exports = {
  inserProduct,
  getSales,
  getSalesId,
};