import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Authorization' : 'Bearer ' + window.sessionStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URL = "http://localhost:8080/todos"

  constructor(private httpClient: HttpClient) { }

  public createTodo(todo: Todo): Observable<Object>{
    return this.httpClient.post(`${this.URL}`, todo, httpOptions);
  }

  public getTodoList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.URL}`, httpOptions);
  }

  public getTodoById(id: number): Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.URL}/${id}`, httpOptions);
  }

  public updateTodo(id: number, todo: Todo): Observable<Todo>{
    return this.httpClient.put<Todo>(`${this.URL}/${id}`, todo, httpOptions);
  }

  public deleteTodo(id: number): Observable<Todo>{
    return this.httpClient.delete<Todo>(`${this.URL}/${id}`, httpOptions);
  }
}
