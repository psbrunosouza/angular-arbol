import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-input',
  templateUrl: './arbol-input.component.html',
  styleUrls: ['./arbol-input.component.scss']
})
export class ArbolInputComponent implements OnInit {

  @Input() public placeholder?: string;

  @Input() public type: "text" | "email" | "password" = "text";

  constructor() {
  }

  ngOnInit(): void {
  }

  public togglePassword(): void {
    switch (this.type){
      case "text":
        this.type = "password";
        break;

      case "password":
        this.type = "text";
        break;
    }
  }
}
