import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ab-textarea',
  templateUrl: './arbol-textarea.component.html',
  styleUrls: ['./arbol-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArbolTextareaComponent),
      multi: true
    }
  ]
})
export class ArbolTextareaComponent implements OnInit {

  @Input() placeholder?: string;

  @Input() public required = false;

  @Input() public disabled = false;

  @Input() public data: string;

  constructor() { }

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
