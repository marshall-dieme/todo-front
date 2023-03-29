import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username,
      password
    }, httpOptions);
  }

  register(username: string,firstName: string, lastName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      firstName,
      lastName,
      password
    }, httpOptions);
  }
}
