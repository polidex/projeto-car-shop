import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/car.service';
import { carIn, carOut, carUpdate, carUpdated } from '../../mocks/car.mock';

describe('testes da camanda CarService', function () {
  it('testa se é possível cadastrar um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carOut);

    const carService = new CarService();
    const result = await carService.createCar(carIn);

    expect(result).to.be.deep.equal(carOut);
  });

  it('testa se é possível listar os carros', async function () {
    sinon.stub(Model, 'find').resolves([carOut]);

    const carService = new CarService();
    const result = await carService.readCars();

    expect(result).to.be.deep.equal([carOut]);
  });

  it('testa se é possível filtrar um carro atravez do id', async function () {
    sinon.stub(Model, 'findById').resolves('63e12c6946c48eceb8647107');

    const carService = new CarService();
    const result = await carService.readCarById('63e12c6946c48eceb8647107');

    expect(result).to.be.deep.equal([carOut]);
  });

  it('testa se é possível fazer update em um carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdated);

    const carService = new CarService();
    const result = await carService.updateCarById(carUpdate, '63e12c6946c48eceb8647107');

    expect(result).to.be.deep.equal(carOut);
  });
});