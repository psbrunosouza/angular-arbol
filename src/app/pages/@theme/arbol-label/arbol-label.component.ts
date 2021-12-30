import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'arbol-label',
  templateUrl: './arbol-label.component.html',
  styleUrls: ['./arbol-label.component.scss']
})
export class ArbolLabelComponent implements OnInit {

  @Input() public label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
