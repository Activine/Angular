import { ObserversModule } from "@angular/cdk/observers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthResponse, User } from "src/app/shared/interface/products.interface";

@Injectable ()
export class AuthService {
  constructor( private http: HttpClient) {}

  get token() {
    const expDate: any = localStorage.getItem('token-exp')
    if (new Date() > new Date(expDate)) {
      this.logout()
      return null
    }
    return localStorage.getItem('token')
  }

  login(user: User): Observable<AuthResponse> {
    return this.http.post('https://hys-fe-course-api.vercel.app/auth/login', user)
    .pipe(
      tap(this.setToken)
    )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    console.log(this.token);

    return !!this.token
  }

  private setToken(res: any) {
    if (res) {
      console.log(res);
      const expDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('token-exp', expDate.toString())
      console.log(this.token);

    } else {
      localStorage.clear()

    }
  }
}
