import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from './todo.service';
import { Observable, of, tap, zip } from 'rxjs';
import { TodoItem } from './app.models';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <h1>TODO</h1>
    <div *ngIf="isLoading">Loading...</div>
    <div *ngFor="let todo of todos$ | async">
        [{{ todo.id }}] {{ todo.title }}
        <button (click)="update(todo)">Update</button>
      </div>    
    
  `,
  styles: [],
})
export class AppComponent implements OnInit {  
  todos$!: Observable<TodoItem[]>;
  isLoading = false;

  constructor(private http: AppService) {    
  }

<<<<<<< HEAD
  ngOnInit(): void {    
    this.isLoading = true;
    this.todos$ = this.http.getTodos().pipe(
      tap(() => this.isLoading = false)
    );    
  }

  update(todo: TodoItem) {
    this.isLoading = true;
    
    zip(
      this.http.updateTodo(todo), 
      this.http.getTodos()
    ).subscribe({
      next: ([updatedTodo, todos]) => {
        var arr = todos.filter(t => t.id != updatedTodo.id).concat(updatedTodo);
        this.todos$ = of(arr.sort((a, b) => Number(a.id) - Number(b.id)));        
      },
      error: err => {
        this.isLoading = false;
        alert(err.message);
      },
      complete: () => this.isLoading = false
    })
=======
  update(todo: any) {
    this.http
      .put<any>(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        JSON.stringify({
          todo: todo.id,
          title: randText(),
          body: todo.body,
          userId: todo.userId,
        }),
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .subscribe((todoUpdated: any) => {
        this.todos[todoUpdated.id - 1] = todoUpdated;
      });
>>>>>>> 17108c32343a872f6320c50f3ecceac619923617
  }
}
