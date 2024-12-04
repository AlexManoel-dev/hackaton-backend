import { Injectable } from '@nestjs/common';
import { CreateHeatExchangerDto } from './dto/create-heat-exchanger.dto';
import { UpdateHeatExchangerDto } from './dto/update-heat-exchanger.dto';

@Injectable()
export class HeatExchangerService {
  create(createHeatExchangerDto: CreateHeatExchangerDto) {
    return 'This action adds a new heatExchanger';
  }

  findAll() {
    return `This action returns all heatExchanger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heatExchanger`;
  }

  update(id: number, updateHeatExchangerDto: UpdateHeatExchangerDto) {
    return `This action updates a #${id} heatExchanger`;
  }

  remove(id: number) {
    return `This action removes a #${id} heatExchanger`;
  }
}
