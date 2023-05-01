const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const productMock = require('../../unit/models/mock/productMock');

describe('Testes products da camada model', () => {
    afterEach(() => {
    sinon.restore();
  });
    it('getProducts retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([productMock.products])

      const productSucess = await productModel.getProducts();
      expect(productSucess).to.be.deep.equal(productMock.products);
    })
    it('getProductsId retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([[productMock.productsId]])

      const idSucess = await productModel.getProductsId();
      expect(idSucess).to.be.deep.equal(productMock.productsId)
    })
});
