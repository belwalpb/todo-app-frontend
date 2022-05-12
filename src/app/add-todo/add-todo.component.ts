import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  inputValue: string = '';

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todoService.addTodo(this.inputValue);
    alert("Todo Added Successfully!");
    this.inputValue = '';
  }

}
