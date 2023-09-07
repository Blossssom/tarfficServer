import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import * as moment from 'moment';
import { interval, map } from 'rxjs';
import { Server } from 'ws';

@WebSocketGateway(8082)
export class EventSecondGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: any) {
    return interval(1000).pipe(
      map(() => {
        const time = moment().format('LLLL');
        return { event: 'second', data: time };
      }),
    );
  }
}
