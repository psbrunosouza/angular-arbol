import { Injectable } from '@angular/core';
import { Subject} from "rxjs";
import {BranchModel} from "../../@data/models/branch.model";

@Injectable({
  providedIn: 'root'
})
export class TreeStructureService {

  branchesStorage$: Subject<BranchModel> = new Subject<BranchModel>();

  constructor() { }

  setBranchStorageEvent(branch: BranchModel): void{
    this.branchesStorage$.next(branch);
  }


}
