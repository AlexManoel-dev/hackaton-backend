import { Injectable } from '@nestjs/common';
import { CreatePressureLossDto } from './dto/create-pressure-loss.dto';
import { UpdatePressureLossDto } from './dto/update-pressure-loss.dto';

@Injectable()
export class PressureLossService {
  create(createPressureLossDto: CreatePressureLossDto) {
    return 'This action adds a new pressureLoss';
  }

  findAll() {
    return `This action returns all pressureLoss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pressureLoss`;
  }

  update(id: number, updatePressureLossDto: UpdatePressureLossDto) {
    return `This action updates a #${id} pressureLoss`;
  }

  remove(id: number) {
    return `This action removes a #${id} pressureLoss`;
  }
}
