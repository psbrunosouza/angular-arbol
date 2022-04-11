import { Component, OnInit } from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {SelectedBranchService} from "../../../@data/services/branch/selected-branch.service";
import {BranchService} from "../../../@data/services/branch/branch.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [BranchService]
})
export class DiaryComponent implements OnInit {

  branch: BranchModel;

  activeMarkdownContent: boolean = false;

  constructor(private selectedBranchService: SelectedBranchService, private branchService: BranchService) { }

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.selectedBranchService.selectedBranch$.subscribe((branch) => {
      this.branchService.show(branch.id).subscribe((branch) => {
        this.branch = branch;
      })
    });
  }

  updateContentHeader(branch: BranchModel): void {
    const branchToUpdate: BranchModel = <BranchModel>{
      description: branch.description,
      name: branch.name,
      id: branch.id,
      user: branch.user,
      category: branch.category,
      status: branch.status
    }

    this.branchService.update(branchToUpdate).subscribe((branch) => {
      /**
       * TODO: put here any toast to inform the user that the branch was created
       */
    })
  }

  updateBranch(branch: BranchModel): void {
    const branchToUpdate: BranchModel = <BranchModel>{
      description: branch.description,
      name: branch.name,
      id: branch.id,
      user: branch.user,
      category: branch.category,
      status: branch.status
    }

    if(this.activeMarkdownContent){
      this.branchService.update(branchToUpdate).subscribe((branch) => {
        /**
         * TODO: put here any toast to inform the user that the branch was created
         */
      })
      this.activeMarkdownContent = false;
    }else {
      this.activeMarkdownContent = true;
    }
  }
}
