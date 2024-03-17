import { Injectable, inject } from "@angular/core"
import { TodoService } from "./todo.service"
import { BehaviorSubject, timer } from "rxjs"
import { Todo } from "./todo.model"
import { HttpErrorResponse } from "@angular/common/http"
import { randText } from "@ngneat/falso"

@Injectable({ providedIn: 'root' })
export class TodoStoreService {
	private todoService = inject(TodoService)

	private todoListSubject = new BehaviorSubject(<Todo[]>[])
	private loadingSubject = new BehaviorSubject<boolean>(false)
	private errorSubject = new BehaviorSubject<string | undefined>(undefined)
	private noticeSubject = new BehaviorSubject<string | undefined>(undefined)

	readonly loading$ = this.loadingSubject.asObservable()
	readonly todoList$ = this.todoListSubject.asObservable()
	readonly notice$ = this.noticeSubject.asObservable()
		

	fetchAllTodos(): void {		
		this.initLoading()		
			.getTodos()			
			.subscribe(this.buildObserver((list: Todo[]) => {
				this.todoListSubject.next(list)				
			}))			
	}

	updateTodo(todo: Todo) {		
		todo.title = randText()		
		
		this.initLoading()		
			.updateTodo(todo)						
			.subscribe(this.buildObserver((todoUpdated: Todo) => {
				const replacement = 
			 	  this.todoListSubject.value
			 		  .map(todo => todo.id === todoUpdated.id ? todoUpdated : todo)

				this.todoListSubject.next(replacement)				
				this.addNotice('todo item updated!')
			}))			
	}

	deleteTodo(id: number) {				
		this.initLoading()		
			.deleteTodo(id)
			.subscribe(this.buildObserver(() => {
				const filtered = 
					this.todoListSubject.value
						.filter(todo => todo.id != id)

				this.todoListSubject.next(filtered)
				this.addNotice('todo item deleted!')
			}))
	}

	clearNotice() {
		this.noticeSubject.next(undefined)
	}

	private initLoading(): TodoService {
		this.loadingSubject.next(true)
		this.errorSubject.next(undefined)
		this.noticeSubject.next(undefined)

		return this.todoService
	}

	private buildObserver(fn: Function): any {
		return {			
			next: fn,
			error: (err:  HttpErrorResponse) => {
				console.error(err)
				this.loadingSubject.next(false)
				this.errorSubject.next(err.message)
			},
			complete: () => this.loadingSubject.next(false)
		}
	}

	private addNotice(notice: string, ttl = 2000) {
		this.noticeSubject.next(notice)
		timer(ttl).subscribe(() => this.noticeSubject.next(undefined))
	}
}