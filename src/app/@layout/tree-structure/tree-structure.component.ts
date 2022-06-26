import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BranchModel} from "../../@data/models/branch.model";
import {ArbolModalComponent} from "../../@components/arbol-modal/arbol-modal.component";
import {BranchService} from "../../@data/services/branch/branch.service";

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

  constructor(private branchService: BranchService) {
  }

  ngOnInit(): void {
    this.branch = new BranchModel();
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.listRoots().subscribe((branches) => {
      this.branches = branches;
    })
  }

  onSubmit(branch: BranchModel, ref: ArbolModalComponent): void {
    this.branchService.create(branch).subscribe(() => {
      ref.changeModalVisibility();
    })
  }
}
