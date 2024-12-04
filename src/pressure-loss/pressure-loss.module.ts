import { Module } from '@nestjs/common';
import { PressureLossService } from './pressure-loss.service';
import { PressureLossController } from './pressure-loss.controller';

@Module({
  controllers: [PressureLossController],
  providers: [PressureLossService],
})
export class PressureLossModule {}
