import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeatExchangerModule } from './heat-exchanger/heat-exchanger.module';
import { PressureLossModule } from './pressure-loss/pressure-loss.module';
import { PumpSelectorModule } from './pump-selector/pump-selector.module';
import { HeatExchangerGateway } from './heat-exchanger/heat-exchanger.gateway';

@Module({
  imports: [
    PressureLossModule,
    HeatExchangerModule,
    PumpSelectorModule,
    HeatExchangerGateway,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
