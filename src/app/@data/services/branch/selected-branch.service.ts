import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BranchModel} from "../../models/branch.model";

@Injectable({providedIn: 'root'})
export class SelectedBranchService {

  selectedBranch$: Subject<BranchModel> = new Subject<BranchModel>();

  set setSelectedBranch(branch: BranchModel){
    this.selectedBranch$.next(branch);
  }

  constructor() { }
}
