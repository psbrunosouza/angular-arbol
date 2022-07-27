import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";
import {BranchService} from "../../../@data/services/branch/branch.service";
import {ActivatedRoute} from "@angular/router";
import {MenuService} from "../../../@data/services/subjects/menu/menu.service";

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
  ) {}

  ngOnInit(): void {
    this.branch = new BranchModel();

    this.activatedRoute.params.subscribe(({id}) => {
      if(!!id) this.branchService.show(id).subscribe((data) => {
        this.branch = data;
      });
    });
  }
}
