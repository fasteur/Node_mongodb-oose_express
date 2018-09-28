import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http : HttpClient ) { }
  getUsers():Observable<User[]>{

    return this.http.get('http://localhost:3000/users') 
    .pipe(map(data => data as User[]))
  }
  
}
