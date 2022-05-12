import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: any[] = [
    { task: 'Need to go home', date: '12-02-2022' },
    { task: 'Walk', date: '15-02-2022' },
    { task: 'Need to bath', date: '13-02-2022' },
    { task: 'Take Food', date: '14-02-2022' },
  ]

  public deleteTodo(index:number):void {
    let  tempArr = [];
    for(let i=0;i<this.todos.length;i++) {
      if(i != index) {
        tempArr.push(this.todos[i]);
      }
    }
    this.todos = tempArr;
  }

  public addTodo(newTask:string) {
    this.todos.push({task:newTask, date: new Date().toUTCString()});
  }

}
