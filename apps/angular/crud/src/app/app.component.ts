import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { Todo } from './todo.model'
import { TodoStoreService } from './todo-store.service';


@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'app-root',
  template: `  
    <h1>TODO by Simon</h1>

    <div *ngIf="notice$ | async as notice" class="notice">
      {{ notice }}
    </div>

    @if (loading$ | async) {
      <div class="loading">Loading....</div>
    } @else {
      <div *ngFor="let todo of todoList$ | async">
        {{ todo.title }}
        <button (click)="updateTodo(todo)">Update</button>
        <button (click)="deleteTodo(todo.id)">Delete</button>
      </div>
    }    
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {  
  private store = inject(TodoStoreService)

  todoList$ = this.store.todoList$
  loading$ = this.store.loading$  
  notice$ = this.store.notice$

  ngOnInit(): void {
    this.store.fetchAllTodos()      
  }

  updateTodo(todo: Todo) {
    this.store.updateTodo(todo)    
  }

  deleteTodo(id: number) {
    this.store.deleteTodo(id)    
  }  
}
