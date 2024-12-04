import { Module } from '@nestjs/common';
import { HeatExchangerService } from './heat-exchanger.service';
import { HeatExchangerController } from './heat-exchanger.controller';

@Module({
  controllers: [HeatExchangerController],
  providers: [HeatExchangerService],
})
export class HeatExchangerModule {}
