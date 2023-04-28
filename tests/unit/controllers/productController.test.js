const chai = require('chai');
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const { expect } = chai
const productController = require('../../../src/controllers/productController')
const productService = require('../../../src/services/productService')
const productMock = require('../../unit/models/mock/productMock')

describe('Testes products da camada controller', () => {
  describe('Casos de Sucesso getProducts', () => {
    it('getProducts retorna dados', async () => {
      sinon.stub(productService, 'getProducts').resolves(productMock.products);
      const req = {
        body: [
          { id: 1, name: 'Martelo de Thor' },
          { id: 2, name: 'Traje de encolhimento' },
          { id: 3, name: 'Escudo do Capitão América' }
        ]
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      await productController.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ]);
    });
  });

});