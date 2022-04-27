import {Component, Input, OnInit} from '@angular/core';

type TType = "button" | "submit";
type TUse = "fill" | "link" | "outline";

@Component({
  selector: 'ab-button',
  templateUrl: './arbol-button.component.html',
  styleUrls: ['./arbol-button.component.scss']
})
export class ArbolButtonComponent implements OnInit {

  @Input() public type?: TType = "submit";

  @Input() public use?: TUse = "fill";

  @Input() public background?: string;

  @Input() public borderColor?: string;

  @Input() public borderRadius?: number;

  @Input() public borderWidth?: number;

  @Input() public color?: string;

  @Input() public disabled?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
