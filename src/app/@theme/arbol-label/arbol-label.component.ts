import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-label',
  templateUrl: './arbol-label.component.html',
  styleUrls: ['./arbol-label.component.scss']
})
export class ArbolLabelComponent implements OnInit {

  @Input() public color?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
