import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-link',
  templateUrl: './arbol-link.component.html',
  styleUrls: ['./arbol-link.component.scss']
})
export class ArbolLinkComponent implements OnInit {

  @Input() public to: string | string[];

  constructor() { }

  ngOnInit(): void {
  }

}
