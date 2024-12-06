import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PressureLossService } from './pressure-loss.service';
import { CreatePressureLossDto } from './dto/create-pressure-loss.dto';
import { UpdatePressureLossDto } from './dto/update-pressure-loss.dto';

@WebSocketGateway()
export class PressureLossGateway {
  constructor(private readonly pressureLossService: PressureLossService) {}

  @SubscribeMessage('createPressureLoss')
  create(@MessageBody() createPressureLossDto: CreatePressureLossDto) {
    return this.pressureLossService.create(createPressureLossDto);
  }

  @SubscribeMessage('findAllPressureLoss')
  findAll() {
    return this.pressureLossService.findAll();
  }

  @SubscribeMessage('findOnePressureLoss')
  findOne(@MessageBody() id: number) {
    return this.pressureLossService.findOne(id);
  }

  @SubscribeMessage('updatePressureLoss')
  update(@MessageBody() updatePressureLossDto: UpdatePressureLossDto) {
    return this.pressureLossService.update(updatePressureLossDto.id, updatePressureLossDto);
  }

  @SubscribeMessage('removePressureLoss')
  remove(@MessageBody() id: number) {
    return this.pressureLossService.remove(id);
  }
}
