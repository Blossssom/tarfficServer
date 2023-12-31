import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';
import * as moment from 'moment';

@WebSocketGateway(8081)
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: any) {
    return interval(1000).pipe(
      map(() => {
        const time = moment().format();
        return { event: 'events', data: time };
      }),
    );
  }
}
// : Observable<WsResponse<number>>
