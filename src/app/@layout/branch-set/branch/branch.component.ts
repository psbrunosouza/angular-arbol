import {Component, Input, OnInit} from '@angular/core';
import {BranchModel} from "../../../@data/models/branch.model";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  @Input() selected: boolean;

  @Input() branch: BranchModel;

  constructor() { }

  ngOnInit(): void {
  }
}
