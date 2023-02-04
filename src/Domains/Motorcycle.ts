import IMotorcycle from '../Interfaces/IMotorcycle.interface';

class Motorcycle {
  id: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | undefined;
  buyValue: number;
  category: string;
  engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;