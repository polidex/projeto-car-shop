import { Router } from 'express';
import MotoController from '../Controllers/motorcycle.controller';

const motoRouter = Router();

motoRouter.post('/', (req, res, next) => new MotoController(req, res, next).createMoto());
motoRouter.get('/', (req, res, next) => new MotoController(req, res, next).readMotos());
motoRouter.get('/:id', (req, res, next) => new MotoController(req, res, next)
  .readMotoById());
motoRouter.put('/:id', (req, res, next) => new MotoController(req, res, next)
  .updateMotoById());

export default motoRouter;
