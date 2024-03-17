import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./todo.model";
import { Injectable, inject } from "@angular/core";

const RESOURCE_URL = 'https://jsonplaceholder.typicode.com/todos' as const

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private http = inject(HttpClient)	

	public getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(RESOURCE_URL)
	}

	public updateTodo(todo: Todo): Observable<Todo> {
		return this.http.put<Todo>(`${RESOURCE_URL}/${todo.id}`, todo,		  
		  {
			headers: {
			  'Content-type': 'application/json; charset=UTF-8',
			},
		  }
		)
	}

	public deleteTodo(id: number): Observable<any> {
		return this.http.delete<any>(`${RESOURCE_URL}/${id}`)
	}
}