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
      this.branch = branch;
    });
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

    console.log(branchToUpdate);

    if(this.activeMarkdownContent){
      this.branchService.update(branchToUpdate).subscribe((branch) => {
        console.log(branch)
      })
      this.activeMarkdownContent = false;
    }else {
      this.activeMarkdownContent = true;
    }
  }
}
