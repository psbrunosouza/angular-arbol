import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-icon',
  templateUrl: './arbol-icon.component.html',
  styleUrls: ['./arbol-icon.component.scss']
})
export class ArbolIconComponent implements OnInit {

  @Input() public icon: string;

  @Input() public size?: number = 16;

  @Input() public color?: string;

  @Input() public selected?: boolean = false;

  get getStyle(): string {
    return `${this.icon} w-[${this.size}px] h-[${this.size}px] text-[${this.size}px]`
  }


  constructor() { }

  ngOnInit(): void {
  }

}
