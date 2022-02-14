import {DefaultModel} from "./default.model";
import {Observable} from "rxjs";
import {ProfileModel} from "./profile.model";

export class UserModel extends DefaultModel {
  name: string;
  email: string;
  password: string;
  description: string;
  profile: ProfileModel;
}

export interface IUserService {
  create(user: UserModel): Observable<UserModel>;
  list(): Observable<UserModel[]>;
}


