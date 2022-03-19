import { Component, OnInit } from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {ShowcaseBranchService} from "../../../@data/services/showcase-branch.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  providers: [ ]
})
export class DiaryComponent implements OnInit {

  branch: BranchModel;

  activeMarkdownContent: boolean = false;

  constructor(private showCaseBranchService: ShowcaseBranchService) { }

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.showCaseBranchService.currentBranch$.subscribe((branch) => {
      this.branch = branch;
    });
  }
}
