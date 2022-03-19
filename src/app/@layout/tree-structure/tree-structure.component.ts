import { Component, OnInit } from '@angular/core';
import {BranchService} from "../../@data/services/branch.service";
import {BranchModel} from "../../@data/models/branch.model";

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss'],
  providers: [BranchService]
})
export class TreeStructureComponent implements OnInit {
  branches: BranchModel[] = [];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    })
  }
}
