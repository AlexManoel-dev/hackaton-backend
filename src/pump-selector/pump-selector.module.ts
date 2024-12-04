import { Module } from '@nestjs/common';
import { PumpSelectorService } from './pump-selector.service';
import { PumpSelectorController } from './pump-selector.controller';

@Module({
  controllers: [PumpSelectorController],
  providers: [PumpSelectorService],
})
export class PumpSelectorModule {}
