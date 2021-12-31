import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-button',
  templateUrl: './arbol-button.component.html',
  styleUrls: ['./arbol-button.component.scss']
})
export class ArbolButtonComponent implements OnInit {

  @Input() public type?: string = "submit";

  constructor() { }

  ngOnInit(): void {
  }

}
