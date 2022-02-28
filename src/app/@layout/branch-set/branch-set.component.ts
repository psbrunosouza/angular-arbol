import { Component, OnInit } from '@angular/core';
import {BranchModel} from "../../@data/models/branch.model";
import {BranchService} from "../../@data/services/branch.service";
import {ShowcaseBranchService} from "../../@data/services/showcase-branch.service";

@Component({
  selector: 'app-branch-set',
  templateUrl: './branch-set.component.html',
  styleUrls: ['./branch-set.component.scss'],
  providers: [BranchService]
})
export class BranchSetComponent implements OnInit {

  branches: BranchModel[];

  currentBranch: BranchModel;

  constructor(private branchService: BranchService, private showCaseBranchService: ShowcaseBranchService) { }

  ngOnInit(): void {
    this.currentBranch = new BranchModel();
    this.loadBranches();
  }

  selectBranch(branch: BranchModel): void {
    this.currentBranch = branch;
    this.loadBranch(this.currentBranch.id);
    this.showCaseBranchService.setBranch(this.currentBranch);
  }

  loadBranch(id: number): void {
    this.branchService.show(id).subscribe((branches) => {
      this.currentBranch = branches;
       });
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    });
  }
}
