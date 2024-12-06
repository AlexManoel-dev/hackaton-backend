import { Module } from '@nestjs/common';
import { PumpSelectorService } from './pump-selector.service';
import { PumpSelectorGateway } from './pump-selector.gateway';

@Module({
  providers: [PumpSelectorGateway, PumpSelectorService],
})
export class PumpSelectorModule {}
