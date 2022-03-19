import {Component, Input, OnInit} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {TreeStructureService} from "../tree-structure.service";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() branches: BranchModel[] = [];

  constructor(private branchStructureViewService: TreeStructureService) {
  }

  ngOnInit(): void {
    this.branchStructureViewService.branchesStorage$.subscribe((selectedBranch) => {

      !!this.branches && this.branches.forEach((branch, index) => {
        if(branch.id === selectedBranch.id && !branch.children){
          this.branches[index].children = selectedBranch.children;
        }

        if(branch.id === selectedBranch.id){
          this.onExpand(index);
        }
      })
    });
  }

  onExpand(index: number): void{
    this.branches[index].children
      ? this.branches[index].expanded = !this.branches[index].expanded
      : this.branches[index].expanded  = false;
  }
}
