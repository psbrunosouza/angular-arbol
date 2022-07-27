import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {BranchService} from "../../../@data/services/branch/branch.service";
import {ActivatedRoute} from "@angular/router";
import {BranchReloadService} from "../../../@data/services/branch/branch-reload.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  branch: BranchModel;

  constructor(
    private branchService: BranchService,
    private activatedRoute: ActivatedRoute,
    private branchReloadService: BranchReloadService
  ) {}

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.activatedRoute.queryParams.subscribe(({id}) => {
      if(!!id) this.branchService.show(id).subscribe((data) => {
        this.branch = data;
      });
    });

    this.branchReloadService.reloadListOfTasks$.subscribe(async (branch) => {
      if(!!branch) this.branchService.show(branch.id).subscribe((data) => {
        this.branch = data;
      });
    });
  }
}
