const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productModel')
const productService = require('../../../src/services/productService');
const productMock = require('../../unit/models/mock/productMock');

describe('Testes products da camada Service', () => {
  describe('Casos de Sucesso getProducts', async () => {
        afterEach(() => sinon.restore());
    it('getProducts retorna dados')
      sinon.stub(productModel, 'getProducts').resolves(productMock.products)

       const productSucess = await productService.getProducts();
      expect(productSucess).to.be.an('array');
      expect(productSucess).to.have.length(3)
      expect(productSucess[0]).to.contain.keys(['id', 'name'])
  });
  describe('Casos sem Sucesso getProducts', () => {
     afterEach(() => sinon.restore());
    it('getProducts nao retorna dados', async () => {
      sinon.stub(productModel, 'getProducts').resolves([  ])

      const productNoSucess = await productService.getProducts();
      expect(productNoSucess).to.be.an('array');
      expect(productNoSucess).to.have.length(0)
    })
  })
   describe('Casos de Sucesso getProductsId', () => {
    afterEach(() => sinon.restore());
    it('getProductsId retorna dados', async () => {
      sinon.stub(productModel, 'getProductsId').resolves(productMock.productsId)

      const idSucess = await productService.getProductsId();
      expect(idSucess).to.be.an('array');
      expect(idSucess).to.have.length(1)
       expect(idSucess[0]).to.contain.keys(['id', 'name'])
    })
   })
  describe('Casos sem Sucesso getProductsId', () => {
    afterEach(() => sinon.restore());
    it('getProductsId nao retorna dados', async () => {
      sinon.stub(productModel, 'getProductsId').resolves([])
      
      const idNoSucess = await productService.getProductsId();
      expect(idNoSucess).to.be.an('array');
      expect(idNoSucess).to.have.length(0)
    })
  })
});