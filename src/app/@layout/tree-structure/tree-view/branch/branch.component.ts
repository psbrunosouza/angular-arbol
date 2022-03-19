import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BranchModel} from "../../../../@data/models/branch.model";
import {BranchService} from "../../../../@data/services/branch.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {

  @Input() branch: BranchModel;

  @Output() branchEvent$: EventEmitter<BranchModel> = new EventEmitter<BranchModel>();

  arrowStatusList = {
    active: "bi bi-caret-down-fill",
    inactive: "bi bi-caret-right-fill"
  }

  isActive: boolean = false;

  arrowStatus: string = this.arrowStatusList["inactive"];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
  }

  loadBranch(id: number): void {
    this.branchService.show(id).subscribe(branch => {
      this.branch = branch;
      this.branchEvent$.emit(this.branch);
      this.arrowStatus = this.activateBranchArrow();
    });
  }

  activateBranchArrow(): string {
    if(!!this.branch.children.length){
      this.isActive = !this.isActive
    }

    return this.isActive
      ? this.arrowStatusList["active"]
      : this.arrowStatusList["inactive"];
  }
}
