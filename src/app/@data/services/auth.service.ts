import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthModel, IAuthService} from "../models/auth.model";

@Injectable()
export class AuthService implements IAuthService{
  url = '/users/auth';

  constructor(private http: HttpClient) { }

  auth(user: UserModel): Observable<AuthModel> {
    return this.http.post<AuthModel>(`${environment.baseUrl}${this.url}`, user);
  }

}
