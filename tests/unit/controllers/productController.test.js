const chai = require('chai');
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const { expect } = chai
const productController = require('../../../src/controllers/productController')
const productService = require('../../../src/services/productService')
const productMock = require('../../unit/models/mock/productMock')

describe('Testes products da camada controller', () => {
  afterEach(() => {
    sinon.restore();
  });
    it('getProducts retorna dados', async () => {
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getProducts').resolves(productMock.products);
      await productController.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productMock.products);
    });
     it('getProductsId retorna dados', async () => {
      const res = {};
       const req = {
        params: {id: 2}
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getProductsId').resolves(productMock.productsId);
      await productController.getProductsId(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productMock.productsId);
  });

});