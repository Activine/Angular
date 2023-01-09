import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, Observable} from 'rxjs'
import {delay} from 'rxjs/operators'
import { ApiProduct } from 'src/app/shared/interface/products.interface'


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public dataArr: Array<ApiProduct>;

  addTodo(todo: ApiProduct): Observable<ApiProduct> {
    return this.http.post<ApiProduct>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  fetchTodos(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>('https://hys-fe-course-api.vercel.app/products?limit=10&page=1&sort=-price&filter=author;admin')
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeTodo(id: number): Observable<ApiProduct> {
    return this.http.put<ApiProduct>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
