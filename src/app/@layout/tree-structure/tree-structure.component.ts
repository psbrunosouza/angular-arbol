import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BranchModel} from "../../@data/models/branch.model";
import {ArbolModalComponent} from "../../@components/arbol-modal/arbol-modal.component";
import {BranchService} from "../../@data/services/branch/branch.service";
import {Router} from "@angular/router";

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

  constructor(private branchService: BranchService, private router: Router) {
  }

  ngOnInit(): void {
    this.branch = new BranchModel();
    this.loadBranches();

    this.branchService.reloadListOfTasks$.subscribe(async (value) => {
      if(value) {
        await this.router.navigate(['../']);
        this.loadBranches()
      }
    })
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    })
  }

  createBranch(branch: BranchModel, ref: ArbolModalComponent): void {
    this.branchService.create(branch).subscribe(() => {
      this.branchService.reloadListOfTasks = true;
      ref.changeModalVisibility();
    })
  }
}
