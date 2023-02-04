import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/car.service';

class CarController {
  carService: CarService;
  req: Request;
  res:Response;
  next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.carService = new CarService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  createCar = async () => {
    const newCar: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const result = await this.carService.createCar(newCar);
    return this.res.status(201).json(result);
  };
}

export default CarController;
