import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/motorcycle.service';
import { motoIn, motoOut, motoUpdate, motoUpdated } from '../../mocks/motorcycle.mock';

describe('testes da camanda MotoService', function () {
  it('testa se é possível cadastrar uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(motoOut);

    const motoService = new MotoService();
    const result = await motoService.createMoto(motoIn);

    expect(result).to.be.deep.equal(motoOut);
  });

  it('testa se é possível listar as motos', async function () {
    sinon.stub(Model, 'find').resolves([motoOut]);

    const motoService = new MotoService();
    const result = await motoService.readMotos();

    expect(result).to.be.deep.equal([motoOut]);
  });

  it('testa se é possível filtrar uma moto atravez do id', async function () {
    sinon.stub(Model, 'findById').resolves('63e249fa6cef8b621d0df037');

    const motoService = new MotoService();
    const result = await motoService.readMotoById('63e249fa6cef8b621d0df037');

    expect(result).to.be.deep.equal([motoOut]);
  });

  it('testa se é possível fazer update em uma moto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoUpdated);

    const motoService = new MotoService();
    const result = await motoService
      .updateMotoById(motoUpdate, '63e249fa6cef8b621d0df037');

    expect(result).to.be.deep.equal(motoOut);
  });
});