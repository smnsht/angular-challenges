import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TodoItem } from "./app.models";
import { BehaviorSubject } from "rxjs";
import { randText } from "@ngneat/falso";

@Injectable({providedIn: 'root'})
export class AppService {
	constructor(private http: HttpClient) {}

	//todoItems = new BehaviorSubject<TodoItem[]>([]);

	getTodos() {
		return this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos');		
	}
	
	updateTodo(todo: TodoItem) {		
		return this.http
		  .put<TodoItem>(
			`https://jsonplaceholder.typicode.com/todos/${todo.id}`,
			JSON.stringify({			  
				Id: todo.id,
			  title: randText()
			}),
			{
			  headers: {
				'Content-type': 'application/json; charset=UTF-8',
			  },
			}
		  );
	  }
}