import { Injectable } from '@nestjs/common';
import { CreatePumpSelectorDto } from './dto/create-pump-selector.dto';
import { UpdatePumpSelectorDto } from './dto/update-pump-selector.dto';

@Injectable()
export class PumpSelectorService {
  create(createPumpSelectorDto: CreatePumpSelectorDto) {
    return 'This action adds a new pumpSelector';
  }

  findAll() {
    return `This action returns all pumpSelector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pumpSelector`;
  }

  update(id: number, updatePumpSelectorDto: UpdatePumpSelectorDto) {
    return `This action updates a #${id} pumpSelector`;
  }

  remove(id: number) {
    return `This action removes a #${id} pumpSelector`;
  }
}
