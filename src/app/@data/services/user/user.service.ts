import { Injectable } from '@angular/core';
import {IUserService, UserModel} from "../../models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class UserService implements IUserService{

  url = '/users';

  constructor(private http: HttpClient) { }

  create(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.baseUrl}${this.url}`, user);
  }

  list(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.baseUrl}${this.url}`);
  }
}
