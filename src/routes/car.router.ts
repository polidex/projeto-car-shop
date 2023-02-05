import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRouter = Router();

carRouter.post('/', (req, res, next) => new CarController(req, res, next).createCar());
carRouter.get('/', (req, res, next) => new CarController(req, res, next).readCars());
carRouter.get('/:id', (req, res, next) => new CarController(req, res, next).readCarById());
carRouter.put('/:id', (req, res, next) => new CarController(req, res, next)
  .updateCarById());

export default carRouter;
