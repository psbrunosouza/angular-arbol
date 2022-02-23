import {DefaultModel} from "./default.model";
import {Observable} from "rxjs";
import {CategoryModel} from "./category.model";

export class StatusModel extends DefaultModel {
  name: string;
  description?: string;
}

export interface IStatusService {
  create(status: StatusModel): Observable<StatusModel>;
  list(): Observable<StatusModel[]>;
  show(id: number): Observable<StatusModel>;
  delete(id: number): Observable<StatusModel>;
  update(status: StatusModel): Observable<StatusModel>;
}
