import { Injectable } from '@nestjs/common';
import { calculateLMTD } from 'src/utils/lmtd';
import { CalculateHeatExchangerDto } from './dto/calculate-heat-exchanger.dto';

@Injectable()
export class HeatExchangerService {
  private area(radius: number, pipeLength: number, pipeQtd: number): number {
    return 2 * Math.PI * radius * pipeLength * pipeQtd;
  }

  calculate(payload: CalculateHeatExchangerDto) {
    return (
      payload.coeficient *
      this.area(payload.radius, payload.pipeLength, payload.pipeQtd) *
      calculateLMTD(
        payload.T_hot_in,
        payload.T_hot_out,
        payload.T_cold_in,
        payload.T_cold_out,
        payload.flowType,
      )
    );
  }
}
