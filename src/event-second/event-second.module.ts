import { Module } from '@nestjs/common';
import { EventSecondGateway } from './event-second.gateway';

@Module({
  providers: [EventSecondGateway],
})
export class EventSecondModule {}
