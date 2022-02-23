import { Component, OnInit } from '@angular/core';
import {BranchModel} from "../../@data/models/branch.model";
import {BranchService} from "../../@data/services/branch.service";

@Component({
  selector: 'app-branch-set',
  templateUrl: './branch-set.component.html',
  styleUrls: ['./branch-set.component.scss'],
  providers: [BranchService]
})
export class BranchSetComponent implements OnInit {

  branches: BranchModel[];

  currentBranch: BranchModel = <BranchModel>{};

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.loadBranches();
  }

  selectBranch(branch: BranchModel): void {
    this.currentBranch = branch;
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    })
  }
}
