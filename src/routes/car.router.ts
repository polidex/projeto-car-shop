import { Router } from 'express';
import CarController from '../Controllers/car.controller';

const carRouter = Router();

carRouter.post('/', (req, res, next) => new CarController(req, res, next).createCar());

export default carRouter;
