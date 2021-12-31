import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-input',
  templateUrl: './arbol-input.component.html',
  styleUrls: ['./arbol-input.component.scss']
})
export class ArbolInputComponent implements OnInit {

  @Input() public placeholder?: string;

  @Input() public type?: string = "text";

  constructor() {
  }

  ngOnInit(): void {
  }

}
