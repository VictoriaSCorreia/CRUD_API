import {Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/tasks.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>,
    ) {}

    findAll(){
        return this.taskRepository.find();
    }

    create(createTaskDto: CreateTaskDto){
        const task = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(task);
    }

    async update(id: string, updateTaskDto: UpdateTaskDto){
        const task = await this.taskRepository.preload({
            id: +id,
            ...updateTaskDto,
        });

        if (!task){
            throw new NotFoundException(`Task n°${id} not found`)
        }
        return this.taskRepository.save(task);
    }

    async delete(id: string){
        const number = Number(id)
        const task = await this.taskRepository.findOne({where:{"id": number}});

        if (!task){
            throw new NotFoundException(`Task n°${id} not found`)
        }
        return this.taskRepository.remove(task);
    }
}
