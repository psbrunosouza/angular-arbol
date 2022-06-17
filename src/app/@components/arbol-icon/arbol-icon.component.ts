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

  get getSize(): string {
    console.log(`w-[${this.size}px] h-[${this.size}px]`);
    return `w-[${this.size}px] h-[${this.size}px]`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
