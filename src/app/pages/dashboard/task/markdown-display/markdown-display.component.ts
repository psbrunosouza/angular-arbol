import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BranchModel} from "../../../../@data/models/branch.model";

@Component({
  selector: 'app-markdown-display',
  templateUrl: './markdown-display.component.html',
  styleUrls: ['./markdown-display.component.scss'],

})
export class MarkdownDisplayComponent implements OnInit {

  @Input() active: boolean = false;

  @Input() data: BranchModel;

  @Output() saveBranchDescriptionEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  saveBranchDescription(): void {
    this.saveBranchDescriptionEvent.emit();
  }
}
