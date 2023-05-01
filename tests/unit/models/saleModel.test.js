const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const saleModel = require('../../../src/models/saleModel'); 
const saleMock = require('../models/mock/saleMock');

describe('testes sale da camada model', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('sales retorna dados', async () => {
    sinon.stub(connection, 'execute').resolves([saleMock.sales])
    const saleSucess = await saleModel.getSales();
    expect(saleSucess).to.be.deep.equal(saleMock.sales)
  })
  it('salesId retorna dados', async () => {
    sinon.stub(connection, 'execute').resolves([saleMock.salesId])
    const saleIdSucess = await saleModel.getSalesId();
    expect(saleIdSucess).to.be.deep.equal(saleMock.salesId)
  })
})
