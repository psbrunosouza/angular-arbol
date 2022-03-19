import {Component, Input, OnInit} from '@angular/core';
import {BranchModel} from "../../../../@data/models/branch.model";
import {BranchService} from "../../../../@data/services/branch.service";
import {TreeStructureService} from "../../tree-structure.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {

  @Input() branch: BranchModel;


  constructor(private branchService: BranchService, private branchStructureViewService: TreeStructureService) { }

  ngOnInit(): void {
  }

  loadBranch(id: number): void {

    this.branchService.show(id).subscribe(branch => {
      this.branch = branch;
      this.branchStructureViewService.setBranchStorageEvent(this.branch);
    });
  }
}
