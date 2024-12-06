import { PartialType } from '@nestjs/mapped-types';
import { CreateHeatExchangerDto } from './create-heat-exchanger.dto';

export class UpdateHeatExchangerDto extends PartialType(CreateHeatExchangerDto) {
  id: number;
}
