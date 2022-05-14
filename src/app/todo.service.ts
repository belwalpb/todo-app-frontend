import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './model/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { 
    this.refreshTodos();
  }

  todos: Todos[] = []

  public refreshTodos():void {
    this.http.get<Todos[]>('http://localhost:8080/get-todos', {responseType: 'json'}).subscribe(res => {
      this.todos = res;
    })
  }

  public deleteTodo(id:number):void {
    this.http.delete<Todos[]>(`http://localhost:8080/delete-todo/${id}`).subscribe(res => {
      this.todos = res;
      console.log('Todo Deleted');
    })
  }

  public addTodo(newTask:string) {
    let reqBody = {
      task: newTask
    }
    this.http.post<Todos[]>('http://localhost:8080/add-todo', reqBody).subscribe(todos => {
      this.todos = todos;
      console.log('Todo Added');
    })
  }

}
