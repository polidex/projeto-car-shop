import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/motorcycle.service';

class MotoController {
  motoService: MotoService;
  req: Request;
  res:Response;
  next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.motoService = new MotoService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  createMoto = async () => {
    const newMoto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const result = await this.motoService.createMoto(newMoto);
    return this.res.status(201).json(result);
  };

  readMotos = async () => {
    const result = await this.motoService.readMotos();
    return this.res.status(200).json(result);
  };

  readMotoById = async () => {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const result = await this.motoService.readMotoById(id);
    
    if (!result) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  };

  updateMotoById = async () => {
    const { id } = this.req.params;
    const moto = this.req.body;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const result = await this.motoService.updateMotoById(moto, id);

    if (result === undefined) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  };
}

export default MotoController;
