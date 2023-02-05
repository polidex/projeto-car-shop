import { Schema, model, Model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  async create(moto: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...moto });
  }

  async read(): Promise<IMotorcycle[]> {
    return this.model.find({});
  }

  async readById(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }

  async updateById(moto: IMotorcycle, id: string) {
    return this.model.findByIdAndUpdate(id, moto, { new: true });
  }
}

export default MotorcycleODM;