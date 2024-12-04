import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PumpSelectorService } from './pump-selector.service';
import { CreatePumpSelectorDto } from './dto/create-pump-selector.dto';
import { UpdatePumpSelectorDto } from './dto/update-pump-selector.dto';

@Controller('pump-selector')
export class PumpSelectorController {
  constructor(private readonly pumpSelectorService: PumpSelectorService) {}

  @Post()
  create(@Body() createPumpSelectorDto: CreatePumpSelectorDto) {
    return this.pumpSelectorService.create(createPumpSelectorDto);
  }

  @Get()
  findAll() {
    return this.pumpSelectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pumpSelectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePumpSelectorDto: UpdatePumpSelectorDto) {
    return this.pumpSelectorService.update(+id, updatePumpSelectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pumpSelectorService.remove(+id);
  }
}
