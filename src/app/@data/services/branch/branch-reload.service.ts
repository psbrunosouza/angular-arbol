import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BranchModel} from "../../models/branch.model";

@Injectable({
  providedIn: 'root'
})
export class BranchReloadService {

  constructor() { }

  reloadListOfTasks$: Subject<BranchModel> = new Subject<BranchModel>();

  set reloadListOfTasks(branch: BranchModel) {
    this.reloadListOfTasks$.next(branch);
  }
}
