import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArbolInputComponent } from './arbol-input/arbol-input.component';
import { ArbolLabelComponent } from './arbol-label/arbol-label.component';
import { ArbolButtonComponent } from './arbol-button/arbol-button.component';
import { ArbolIconComponent } from './arbol-icon/arbol-icon.component';

@NgModule({
  declarations: [

    ArbolInputComponent,
     ArbolLabelComponent,
     ArbolButtonComponent,
     ArbolIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArbolInputComponent,
    ArbolButtonComponent,
    ArbolLabelComponent,
    ArbolIconComponent
  ]
})
export class ThemeModule {
}
