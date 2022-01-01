import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-button',
  templateUrl: './arbol-button.component.html',
  styleUrls: ['./arbol-button.component.scss']
})
export class ArbolButtonComponent implements OnInit {

  @Input() public type?: "button" | "submit" = "submit";

  @Input() public background?: string;

  @Input() public color?: string;

  @Input() public use?: "button" | "link" | "outline" = "button";

  constructor() { }

  ngOnInit(): void {
  }

}
