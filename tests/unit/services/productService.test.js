const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productModel')
const productService = require('../../../src/services/productService');
const productMock = require('../../unit/models/mock/productMock');

describe('Testes products da camada Service', () => {
    afterEach(() => {
    sinon.restore();
  });
    it('getProducts retorna dados'), async () => {
      sinon.stub(productModel, 'getProducts').resolves(productMock.products)

       const productSucess = await productService.getProducts();
    expect(productSucess).to.deep.equal(productMock.products);
    }
    it('casos de erro do id', async () => {
      const result = await productService.getProductsId(3333);
      expect(result.message).to.equal('Product not found');
    })
    it('getProductsId retorna produto', async () => {
      sinon.stub(productModel, 'getProductsId').resolves(productMock.productsId)
      
      const idSucess = await productService.getProductsId(2);
      expect(idSucess).to.deep.equal(productMock.productsId);
    })
});