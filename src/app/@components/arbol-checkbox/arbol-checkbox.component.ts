import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'arbol-checkbox',
  templateUrl: './arbol-checkbox.component.html',
  styleUrls: ['./arbol-checkbox.component.scss']
})
export class ArbolCheckboxComponent implements OnInit {

  @Input() label: string = '';

  @Input() labelPosition: 'left' | 'right' = 'left';

  data: boolean = false;

  get getCheckboxStyle(): string {
    return this.data ? 'selected' : 'unselected';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
