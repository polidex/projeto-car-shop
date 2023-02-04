import { Model } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }
}

export default AbstractODM;