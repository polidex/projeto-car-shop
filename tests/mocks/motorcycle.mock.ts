import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const motoIn: IMotorcycle = {
  model: 'ChopperRoad',
  year: 2022,
  color: 'preta',
  status: true,
  buyValue: 13.600,
  category: 'Custom',
  engineCapacity: 150,
};

export const motoOut: Motorcycle = new Motorcycle({
  id: '63e249fa6cef8b621d0df037',
  model: 'ChopperRoad',
  year: 2022,
  color: 'preta',
  status: true,
  buyValue: 13.600,
  category: 'Custom',
  engineCapacity: 150,
});

export const motoUpdate: IMotorcycle = {
  model: 'ChopperRoad',
  year: 2022,
  color: 'verde',
  status: true,
  buyValue: 13.600,
  category: 'Custom',
  engineCapacity: 150,
};

export const motoUpdated: Motorcycle = new Motorcycle({
  id: '63e249fa6cef8b621d0df037',
  model: 'ChopperRoad',
  year: 2022,
  color: 'verde',
  status: true,
  buyValue: 13.600,
  category: 'Custom',
  engineCapacity: 150,
});