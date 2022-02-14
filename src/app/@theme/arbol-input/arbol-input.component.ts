import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ab-input',
  templateUrl: './arbol-input.component.html',
  styleUrls: ['./arbol-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArbolInputComponent),
      multi: true
    }
  ]
})
export class ArbolInputComponent implements OnInit {

  @Input() public placeholder?: string;

  @Input() public type: "text" | "email" | "password" = "text";

  @Input() public required = false;

  @Input() public disabled = false;

  @Input() public data: string;

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  constructor() {
  }

  ngOnInit(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.data = obj;
  }

  public onChange() {
    this.onChangeFn(this.data);
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
