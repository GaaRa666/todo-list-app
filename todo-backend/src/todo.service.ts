import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(text: string): Promise<Todo> {
    const todo = this.todoRepository.create({ text });
    return this.todoRepository.save(todo);
  }

  delete(id: number): Promise<void> {
    return this.todoRepository.delete(id).then(() => undefined);
  }

  async updateCompleted(id: number, completed: boolean): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    todo.completed = completed;
    return this.todoRepository.save(todo);
  }
}
