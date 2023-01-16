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

  fetchTodos(
    sort?: { fieldName: string; value: string } | null,
  ): Observable<ApiProduct[]> {

    return this.http.get<ApiProduct[]>(
      'https://hys-fe-course-api.vercel.app/products',
      {
        params: {
          limit: 20,
          page: 1,
          filter: `author;${localStorage.getItem('username')}`,
          ...sort && sort.value && {
            sort: `${sort.value === '▲' ? '' : '-'}${sort.fieldName}` // sort: '-price'
          }
        }
      }
    )
  }

  removeTodo(id: string): Observable<void> {
    console.log(id);

    return this.http.delete<void>(`https://hys-fe-course-api.vercel.app/products/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`
      }
    })
  }

  completeTodo(id: number): Observable<ApiProduct> {
    return this.http.put<ApiProduct>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
