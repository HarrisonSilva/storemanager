const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const productMock = require('../../unit/models/mock/productMock');

describe('Testes products da camada model', () => {
  describe('Casos de Sucesso getProducts', () => {
    afterEach(() => sinon.restore());
    it('getProducts retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([productMock.products])

      const productSucess = await productModel.getProducts();
      expect(productSucess).to.be.an('array');
      expect(productSucess).to.have.length(3)
      expect(productSucess[0]).to.contain.keys(['id', 'name'])
    })
  })
  describe('Casos sem Sucesso getProducts', () => {
     afterEach(() => sinon.restore());
    it('getProducts nao retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([ [] ])

      const productNoSucess = await productModel.getProducts();
      expect(productNoSucess).to.be.an('array');
      expect(productNoSucess).to.have.length(0)
    })
   })
  describe('Casos de Sucesso getProductsId', () => {
    afterEach(() => sinon.restore());
    it('getProductsId retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([[productMock.productsId]])

      const idSucess = await productModel.getProductsId();
      expect(idSucess).to.be.an('array');
      expect(idSucess).to.have.length(1)
       expect(idSucess[0]).to.contain.keys(['id', 'name'])
    })
  })
  describe('Casos sem Sucesso getProductsId', () => {
    afterEach(() => sinon.restore());
    it('getProductsId nao retorna dados', async () => {
      sinon.stub(connection, 'execute').resolves([ [[]] ])
      
      const idNoSucess = await productModel.getProductsId();
      expect(idNoSucess).to.be.an('array');
      expect(idNoSucess).to.have.length(0)
    })
  })
});
