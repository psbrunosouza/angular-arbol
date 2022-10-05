import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BranchModel} from "../../../../@data/models/branch.model";
import {BranchService} from "../../../../@data/services/branch/branch.service";
import {Router} from "@angular/router";
import {ArbolModalComponent} from "../../../../@components/arbol-modal/arbol-modal.component";
import {BranchReloadService} from "../../../../@data/services/branch/branch-reload.service";

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

  constructor(
    private branchService: BranchService,
    private branchReloadService: BranchReloadService,
    private router: Router
  ) { }

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
    await this.router.navigate(['/dashboard/task'], {queryParams: {id}})
  }

  createBranch(branch: BranchModel, modal: ArbolModalComponent): void {
    this.branchService.create({...branch, branchId: this.currentBranch.id} as BranchModel).subscribe(() => {
      this.branchReloadService.reloadListOfTasks = branch;
      modal.changeModalVisibility();
    })
  }

  deleteBranch(id: number, ref: ArbolModalComponent): void {
    this.branchService.delete(id).subscribe(async () => {
      this.branchReloadService.reloadListOfTasks = this.currentBranch;
      ref.changeModalVisibility();
    })
  }

  updateTask(branch: BranchModel): void {
    this.branchService.update(<BranchModel>{
      description: branch.description,
      name: branch.name,
      id: branch.id
    }).subscribe(() => {
      this.branchReloadService.reloadListOfTasks = branch;
    })
  }
}
