import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200', // Permita conexões do cliente Angular
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    credentials: true, // Permita cookies, se necessário
  },
})
export class HeatExchangerGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  private interval: NodeJS.Timeout;

  afterInit() {
    console.log('WebSocket Gateway Initialized');
    this.startSensorEmulation();
  }

  private startSensorEmulation() {
    this.interval = setInterval(() => {
      const sensorData = {
        temperature: (Math.random() * 30 + 10).toFixed(2), // Temperatura aleatória
        humidity: (Math.random() * 50 + 20).toFixed(2), // Umidade aleatória
        timestamp: new Date().toISOString(), // Data/hora atual
      };

      console.log('Emitting sensor data:', sensorData); // Log dos dados enviados
      this.server.emit('sensor-data', sensorData);
    }, 2000); // Emitir dados a cada 2 segundos
  }
}
