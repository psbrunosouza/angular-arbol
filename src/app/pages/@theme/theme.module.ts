import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArbolInputComponent } from './arbol-input/arbol-input.component';
import { ArbolLabelComponent } from './arbol-label/arbol-label.component';

@NgModule({
  declarations: [

    ArbolInputComponent,
     ArbolLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArbolInputComponent
  ]
})
export class ThemeModule {
}
