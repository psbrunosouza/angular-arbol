import {Component, Input, OnInit} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() branches: BranchModel[] = [];

  leftSpacing: number = 12;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadSelectedBranch(selectedBranch: BranchModel): void{
    !!this.branches && this.branches.forEach((branch, index) => {

      if(branch.id === selectedBranch.id){
        if(!branch.children){
          this.branches[index].children = selectedBranch.children;
        }

        if(branch.children){
          this.onExpand(index);
          this.applyLevel(index);
        }
      }
    })
  }

  onExpand(index: number): void{
    this.branches[index].children
      ? this.branches[index].expanded = !this.branches[index].expanded
      : this.branches[index].expanded = false;
  }

  applyLevel(index: number): void {
    if(this.branches[index].children){
      this.branches[index].children = this.branches[index].children.map((branch) => ({
        ...branch,
        level: <number>this.branches[index].level + 1
      }))
    }

    console.log( this.branches[index])
  }
}
