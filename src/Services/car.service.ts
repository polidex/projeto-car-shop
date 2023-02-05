import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  renderCar(car: ICar) {
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

  async createCar(newCar: ICar) {
    const carODM = new CarODM();
    const car = await carODM.create(newCar);
    return this.renderCar(car);
  }

  async readCars() {
    const carODM = new CarODM();
    const cars = await carODM.read();
    return cars.map((car) => this.renderCar(car));
  }

  async readCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.readById(id);
    if (car) {
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
  }

  async updateCarById(car: ICar, id: string) {
    const carODM = new CarODM();
    const carById = await carODM.updateById(car, id);
    if (carById) this.createCar(carById);
  }
}

export default CarService;
