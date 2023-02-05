import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotoService {
  renderMoto(moto: IMotorcycle) {
    return new Motorcycle({ 
      id: moto.id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    });
  }

  async createMoto(newMoto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.create(newMoto);
    return this.renderMoto(moto);
  }

  async readMotos() {
    const motoODM = new MotorcycleODM();
    const motos = await motoODM.read();
    return motos.map((moto) => this.renderMoto(moto));
  }

  async readMotoById(id: string) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.readById(id);
    if (moto) {
      return new Motorcycle({ 
        id: moto.id,
        model: moto.model,
        year: moto.year,
        color: moto.color,
        status: moto.status,
        buyValue: moto.buyValue,
        category: moto.category,
        engineCapacity: moto.engineCapacity,
      });
    }
  }

  async updateMotoById(moto: IMotorcycle, id: string) {
    const motoODM = new MotorcycleODM();
    const motoById = await motoODM.updateById(moto, id);
    if (motoById) {
      return new Motorcycle({ 
        id: motoById.id,
        model: motoById.model,
        year: motoById.year,
        color: motoById.color,
        status: motoById.status,
        buyValue: motoById.buyValue,
        category: motoById.category,
        engineCapacity: motoById.engineCapacity,
      });
    }
  }
}

export default MotoService;
