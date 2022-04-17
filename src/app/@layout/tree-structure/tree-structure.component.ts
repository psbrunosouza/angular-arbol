import { Component, OnInit } from '@angular/core';
import {BranchService} from "../../@data/services/branch/branch.service";
import {BranchModel} from "../../@data/models/branch.model";
import {ArbolModalComponent} from "../../@components/arbol-modal/arbol-modal.component";

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss'],
  providers: [BranchService]
})
export class TreeStructureComponent implements OnInit {
  branches: BranchModel[] = [];

  branch: BranchModel;

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branch = new BranchModel();
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches.map((branch) => ({...branch, level: 1}));
    })
  }

  onSubmit(modal: ArbolModalComponent): void {
    this.branchService.create(this.branch).subscribe((res) => {
      this.loadBranches();
      modal.changeModalVisibility();
    })
  }
}
