import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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
export class ArbolInputComponent implements OnInit, ControlValueAccessor {

  @Input() data: string;

  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() type: "text" | "email" | "password" = "text";

  @Input() required = false;

  @Input() disabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

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
}
