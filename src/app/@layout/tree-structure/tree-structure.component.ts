import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BranchModel} from "../../@data/models/branch.model";
import {ArbolModalComponent} from "../../@components/arbol-modal/arbol-modal.component";
import {BranchService} from "../../@data/services/branch/branch.service";
import {Router} from "@angular/router";
import {BranchReloadService} from "../../@data/services/branch/branch-reload.service";

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss'],
  providers: [BranchService],
  encapsulation: ViewEncapsulation.None
})
export class TreeStructureComponent implements OnInit {

  branch: BranchModel;
  branches: BranchModel[] = [];

  constructor(private branchService: BranchService, private branchReloadService: BranchReloadService) {
  }

  ngOnInit(): void {
    this.branch = new BranchModel();
    this.loadBranches();

    this.branchReloadService.reloadListOfTasks$.subscribe(async (value) => {
      if(value) {
        this.loadBranches();
      }
    });
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    })
  }

  createBranch(branch: BranchModel, ref: ArbolModalComponent): void {
    this.branchService.create(branch).subscribe(() => {
      this.branchReloadService.reloadListOfTasks = branch;
      ref.changeModalVisibility();
    })
  }
}
