import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs";
import {AuthModel, IAuthService} from "../../models/auth.model";
import {HttpService} from "../http/http.service";

@Injectable()
export class AuthService implements IAuthService{
  url = '/users/auth';

  constructor(private http: HttpService) { }

  auth(user: UserModel): Observable<AuthModel> {
    return this.http.post<UserModel, AuthModel>({
      baseUrl: environment.baseUrl,
      resource: this.url,
      payload: user
    });
  }

}
