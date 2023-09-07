import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { EventSecondModule } from './event-second/event-second.module';

@Module({
  imports: [EventModule, EventSecondModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
