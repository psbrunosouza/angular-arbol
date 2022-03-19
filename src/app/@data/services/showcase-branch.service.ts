import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BranchModel} from "../models/branch.model";

@Injectable({providedIn: 'root'})
export class ShowcaseBranchService {

  currentBranch$: Subject<BranchModel> = new Subject<BranchModel>();

  constructor() { }

  setBranch(branch: BranchModel){
    this.currentBranch$.next(branch);
  }
}
