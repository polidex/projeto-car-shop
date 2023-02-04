import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  async createCar(newCar: ICar) {
    const carODM = new CarODM();
    const car = await carODM.create(newCar);
    return new Car({ 
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    });
  }

  async readCars() {
    const carODM = new CarODM();
    const cars = await carODM.read();
    return cars.map((car) => this.createCar(car));
  }

  async readCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.readById(id);
    if (car) this.createCar(car);
  }
}

export default CarService;
