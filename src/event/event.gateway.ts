import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';

@WebSocketGateway(8081)
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client: any, data: any) {
    return interval(3000).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }
}
// : Observable<WsResponse<number>>
