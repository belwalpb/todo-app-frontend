import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }


  getTodos() : any[] {
      return this.todoService.todos;
  }

  ngOnInit(): void {
  }

  deleteTodo(index:number):void {
   this.todoService.deleteTodo(index);
  }

}
