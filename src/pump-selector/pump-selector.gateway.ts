import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { PumpSelectorService } from './pump-selector.service';
import { CreatePumpSelectorDto } from './dto/create-pump-selector.dto';
import { UpdatePumpSelectorDto } from './dto/update-pump-selector.dto';

@WebSocketGateway()
export class PumpSelectorGateway {
  constructor(private readonly pumpSelectorService: PumpSelectorService) {}

  @SubscribeMessage('createPumpSelector')
  create(@MessageBody() createPumpSelectorDto: CreatePumpSelectorDto) {
    return this.pumpSelectorService.create(createPumpSelectorDto);
  }

  @SubscribeMessage('findAllPumpSelector')
  findAll() {
    return this.pumpSelectorService.findAll();
  }

  @SubscribeMessage('findOnePumpSelector')
  findOne(@MessageBody() id: number) {
    return this.pumpSelectorService.findOne(id);
  }

  @SubscribeMessage('updatePumpSelector')
  update(@MessageBody() updatePumpSelectorDto: UpdatePumpSelectorDto) {
    return this.pumpSelectorService.update(
      updatePumpSelectorDto.id,
      updatePumpSelectorDto,
    );
  }

  @SubscribeMessage('removePumpSelector')
  remove(@MessageBody() id: number) {
    return this.pumpSelectorService.remove(id);
  }
}
