import {Component, Input, OnInit} from '@angular/core';

type IButtonType = "button" | "submit" | "reset";

type IButtonStyle = "full" | "basic" | "clear";

@Component({
  selector: 'ab-button',
  templateUrl: './arbol-button.component.html',
  styleUrls: ['./arbol-button.component.scss']
})
export class ArbolButtonComponent implements OnInit {

  @Input() public type: IButtonType = "submit";

  @Input() public disabled: boolean = false;

  @Input() public buttonStyle: IButtonStyle = 'full';

  get getButtonStyle(): string {
    return `button-style-${this.buttonStyle}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
