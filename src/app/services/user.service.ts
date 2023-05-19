import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.interface';
import { User, UserDetail } from '../models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    public http: HttpClient
  ) { }

  getUsers(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${environment.END_POINT}users`)
  }

  getUser(id: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${environment.END_POINT}users/${id}`)
  }
}
