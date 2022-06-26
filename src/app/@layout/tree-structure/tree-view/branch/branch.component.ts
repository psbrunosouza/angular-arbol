import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BranchModel} from "../../../../@data/models/branch.model";
import {BranchService} from "../../../../@data/services/branch/branch.service";
import {Router} from "@angular/router";
import {ArbolModalComponent} from "../../../../@components/arbol-modal/arbol-modal.component";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {

  @Input() currentBranch: BranchModel;

  @Input() branch: BranchModel;

  @Output() branchEvent: EventEmitter<BranchModel> = new EventEmitter<BranchModel>();

  isActive: boolean = false;

  arrowState: string = "fas fa-arrow-right";

  get activateBranchArrow(): string {
    if(this.currentBranch?.children && this.currentBranch?.children?.length){
      this.isActive = !this.isActive
    }

    return this.isActive
      ?  "fas fa-arrow-down"
      : "fas fa-arrow-right";
  }

  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
    this.branch = new BranchModel();
  }

  loadBranch(id: number): void {
    this.branchService.show(id).subscribe(branch => {
      this.currentBranch = branch;
      this.arrowState = this.activateBranchArrow;
      this.branchEvent.emit(this.currentBranch);
    });
  }



  async selectBranch(id: number): Promise<void> {
    await this.router.navigate(['/dashboard/update-task', id])
  }

  addBranch(onSubmit: ArbolModalComponent): void {
    this.branchService.create({...this.branch, parent: this.currentBranch} as unknown as BranchModel).subscribe((branch) => {
      onSubmit.changeModalVisibility();
    })
  }
}
