import {Observable} from "rxjs";
import {UserModel} from "./user.model";

export class AuthModel {
  token: string;
}

export interface IAuthService {
  auth(user: UserModel): Observable<AuthModel>;
}
