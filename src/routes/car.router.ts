import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRouter = Router();

carRouter.post('/', (req, res, next) => new CarController(req, res, next).createCar());
carRouter.get('/:id', (req, res, next) => new CarController(req, res, next).readCarById());
carRouter.get('/', (req, res, next) => new CarController(req, res, next).readCars());

export default carRouter;
