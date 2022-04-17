import {DefaultModel} from "./default.model";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";

export class CategoryModel extends DefaultModel {
  name: string;
  description?: string;
}

export interface ICategoryService {
  create(category: CategoryModel): Observable<CategoryModel>;
  list(): Observable<CategoryModel[]>;
  show(id: number): Observable<CategoryModel>;
  delete(id: number): Observable<CategoryModel>;
  update(category: CategoryModel): Observable<CategoryModel>;
}
