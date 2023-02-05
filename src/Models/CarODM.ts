import { Schema, model, Model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  async read(): Promise<ICar[]> {
    return this.model.find({});
  }

  async readById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  async updateById(car: ICar, id: string) {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }
}

export default CarODM;