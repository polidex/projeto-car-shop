import Car from '../../src/Domains/Car';
import ICar from '../../src/Interfaces/ICar';

export const carIn: ICar = {
  model: 'HB20',
  year: 2018,
  color: 'prata',
  status: true,
  buyValue: 51.000,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOut: Car = new Car({
  id: '63e12c6946c48eceb8647107',
  model: 'HB20',
  year: 2018,
  color: 'prata',
  status: true,
  buyValue: 51.000,
  doorsQty: 4,
  seatsQty: 5,
});

export const carUpdate: ICar = {
  model: 'HB20',
  year: 2018,
  color: 'vermelho',
  status: true,
  buyValue: 51.000,
  doorsQty: 4,
  seatsQty: 5,
};

export const carUpdated: Car = new Car({
  id: '63e12c6946c48eceb8647107',
  model: 'HB20',
  year: 2018,
  color: 'vermelho',
  status: true,
  buyValue: 51.000,
  doorsQty: 4,
  seatsQty: 5,
});