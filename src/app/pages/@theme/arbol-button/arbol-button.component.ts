import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-button',
  templateUrl: './arbol-button.component.html',
  styleUrls: ['./arbol-button.component.scss']
})
export class ArbolButtonComponent implements OnInit {

  @Input() public type: string = "submit";

  @Input() public background: string = "#9373ED";

  @Input() public color: string = "#fff";

  @Input() public use: "button" | "link" | "outline" = "button";

  constructor() { }

  ngOnInit(): void {
  }

}
