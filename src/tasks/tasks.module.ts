import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { taskProviders } from './tasks.providers';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService, ...taskProviders],
})
export class TasksModule {}
