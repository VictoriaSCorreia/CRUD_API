import { DataSource } from 'typeorm';
import { Task } from './entities/tasks.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATABASE_CONNECTION'],
  },
];
