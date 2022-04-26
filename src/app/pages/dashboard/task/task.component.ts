import {Component, OnInit} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {BranchService} from "../../../@data/services/branch/branch.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [],
})
export class TaskComponent implements OnInit {

  branch: BranchModel;

  activeMarkdownContent: boolean = false;

  constructor(private branchService: BranchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.activatedRoute.params.subscribe(params => {
      if(!!params.id) this.branchService.show(Number(params["id"])).subscribe(data => this.branch = data);
    });
  }

  updateBranchName(branch: BranchModel): void {
    this.branchService.update({
      id: branch.id,
      name: branch.name,
    } as BranchModel).subscribe(() => {
     this.branchService.branch$.next();
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

    if (this.activeMarkdownContent) {
      this.branchService.update(branchToUpdate).subscribe(() => {
        /**
         * TODO: put here any toast to inform the user that the branch was created
         */
      })
      this.activeMarkdownContent = false;
    } else {
      this.activeMarkdownContent = true;
    }
  }
}
