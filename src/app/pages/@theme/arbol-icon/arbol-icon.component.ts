import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-icon',
  templateUrl: './arbol-icon.component.html',
  styleUrls: ['./arbol-icon.component.scss']
})
export class ArbolIconComponent implements OnInit {

  @Input() public icon: string;

  @Input() public size: number = 16;

  @Input() public color: string = "#000";

  constructor() { }

  ngOnInit(): void {
  }

}
