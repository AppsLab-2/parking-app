import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: BehaviorSubject<string> = new BehaviorSubject(null);
  constructor(private readonly http: HttpClient, private readonly router: Router) { }
  getToken(): string {
    return this.token.getValue();
  }

  isLoggedIn(): boolean {

    return !!this.getToken();
  }

  login(username: string, password: string): Observable<any> {
    const info = btoa(`${username}:${password}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    console.log(this.token);
    return this.http.get(`${"http://localhost:8081/user"}`, options).pipe(
      tap(() => this.token.next(token))
    );
  }
  register(username: string, password: string, firstname: string, lastname: string): Observable<any> {
    const user = { username, password, firstname, lastname };
    console.log(user)
    return this.http.post("http://localhost:8081/postUser", user);
  }
  logout(): void {
    this.token = new BehaviorSubject(null);
    this.router.navigateByUrl('/login-form');
  }

}
