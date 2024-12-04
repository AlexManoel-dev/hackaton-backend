import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PressureLossService } from './pressure-loss.service';
import { CreatePressureLossDto } from './dto/create-pressure-loss.dto';
import { UpdatePressureLossDto } from './dto/update-pressure-loss.dto';

@Controller('pressure-loss')
export class PressureLossController {
  constructor(private readonly pressureLossService: PressureLossService) {}

  @Post()
  create(@Body() createPressureLossDto: CreatePressureLossDto) {
    return this.pressureLossService.create(createPressureLossDto);
  }

  @Get()
  findAll() {
    return this.pressureLossService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressureLossService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePressureLossDto: UpdatePressureLossDto) {
    return this.pressureLossService.update(+id, updatePressureLossDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pressureLossService.remove(+id);
  }
}
