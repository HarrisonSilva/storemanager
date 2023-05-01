const chai = require('chai');
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const { expect } = chai
const saleController = require('../../../src/controllers/saleController')
const saleService = require('../../../src//services/saleService')
const saleMock = require('../models/mock/saleMock')

describe('Testes sale da camada controller', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('sale retorna dados', async () => {
    const res = {}
    const req = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleService, 'getSales').resolves(saleMock.sales);
    await saleController.getSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleMock.sales);
  })
  it('saleId retorna dados', async () => {
    const res = {}
    const req = {
     params: {id: 2}
    }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleService, 'getSalesId').resolves(saleMock.salesId);
      await saleController.getSalesId(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleMock.salesId);
  })
})

