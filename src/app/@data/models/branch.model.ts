import {DefaultModel} from "./default.model";
import {UserModel} from "./user.model";
import {CategoryModel} from "./category.model";
import {StatusModel} from "./status.model";
import {Observable} from "rxjs";

export class BranchModel extends DefaultModel {
  name: string;
  user: UserModel;
  children: BranchModel[];
  category: CategoryModel;
  status: StatusModel;
  description?: string;
  level?: number;
  expanded?: boolean;
  childrenQtd?: number;
}

export interface IBranchService {
  create(branch: BranchModel): Observable<BranchModel>;
  listRoots(): Observable<BranchModel[]>;
  show(id: number): Observable<BranchModel>;
  delete(id: number): Observable<BranchModel>;
  update(branch: BranchModel): Observable<BranchModel>;
}
