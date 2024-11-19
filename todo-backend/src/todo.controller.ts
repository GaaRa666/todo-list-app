import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body('text') text: string) {
    return this.todoService.create(text);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }

  @Patch(':id/completed')
  updateCompleted(@Param('id') id: number, @Body('completed') completed: boolean) {
    return this.todoService.updateCompleted(id, completed);
  }
}
