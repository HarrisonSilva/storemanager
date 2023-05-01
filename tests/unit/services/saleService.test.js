const { expect } = require('chai');
const sinon = require('sinon');
const saleService = require('../../../src/services/saleService');
const saleModel = require('../../../src/models/saleModel'); 
const saleMock = require('../models/mock/saleMock');

describe('testes sale da camada Service', () => {
   afterEach(() => {
   sinon.restore();
   })
  it('sale retorna dados', async () => {
    sinon.stub(saleModel, 'getSales').resolves(saleMock.sales)
    const saleSucess = await saleService.getSales();
    expect(saleSucess).to.deep.equal(saleMock.sales);
  })
  it('saleId retorna dados', async () => {
    sinon.stub(saleModel, 'getSalesId').resolves(saleMock.salesId)
    const result = await saleService.getSalesId(2);
    expect(result).to.deep.equal(saleMock.salesId);
  })
});