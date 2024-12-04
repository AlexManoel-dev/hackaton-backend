import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeatExchangerService } from './heat-exchanger.service';
import { CreateHeatExchangerDto } from './dto/create-heat-exchanger.dto';
import { UpdateHeatExchangerDto } from './dto/update-heat-exchanger.dto';

@Controller('heat-exchanger')
export class HeatExchangerController {
  constructor(private readonly heatExchangerService: HeatExchangerService) {}

  @Post()
  create(@Body() createHeatExchangerDto: CreateHeatExchangerDto) {
    return this.heatExchangerService.create(createHeatExchangerDto);
  }

  @Get()
  findAll() {
    return this.heatExchangerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heatExchangerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeatExchangerDto: UpdateHeatExchangerDto) {
    return this.heatExchangerService.update(+id, updateHeatExchangerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heatExchangerService.remove(+id);
  }
}
