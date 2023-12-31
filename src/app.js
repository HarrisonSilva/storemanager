const express = require('express');
const productController = require('./controllers/productController');
const validateName = require('./middlewares/validateName');
const saleController = require('./controllers/saleController');
const validateSale = require('./middlewares/validateSale');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getProductsId);
app.post('/products', validateName.validateName, productController.createProduct);
app.post('/sales',
  validateSale.validateSale, saleController.inserProduct);
app.get('/sales', saleController.getSales);
app.get('/sales/:id', saleController.getSalesId);
app.put('/products/:id', validateName.validateName, productController.updateProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;