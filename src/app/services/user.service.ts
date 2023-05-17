import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from '../models/api-response.interface';
import { User } from '../models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject$ = new BehaviorSubject<User[]>([]);
  public usersObs$ = this._usersSubject$.asObservable()

  set users(users: User[]) {
    this._usersSubject$.next(users);
  }

  constructor(
    public http: HttpClient
  ) { }

  getUsers(): void {
    this.http.get<ApiResponse<User>>(`${environment.END_POINT}users`).subscribe({
      next: resp => {
        this.users = resp.data
      }
    })
  }
}
