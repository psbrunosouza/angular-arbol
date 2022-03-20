import { Component, OnInit } from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {SelectedBranchService} from "../../../@data/services/branch/selected-branch.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [ ]
})
export class DiaryComponent implements OnInit {

  branch: BranchModel;

  activeMarkdownContent: boolean = false;

  constructor(private selectedBranchService: SelectedBranchService) { }

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.selectedBranchService.selectedBranch$.subscribe((branch) => {
      this.branch = branch;
    });
  }
}
