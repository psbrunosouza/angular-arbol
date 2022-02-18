import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArbolInputComponent } from './arbol-input/arbol-input.component';
import { ArbolLabelComponent } from './arbol-label/arbol-label.component';
import { ArbolButtonComponent } from './arbol-button/arbol-button.component';
import { ArbolIconComponent } from './arbol-icon/arbol-icon.component';
import { ArbolLinkComponent } from './arbol-link/arbol-link.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [

    ArbolInputComponent,
    ArbolLabelComponent,
    ArbolButtonComponent,
    ArbolIconComponent,
    ArbolLinkComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ArbolInputComponent,
    ArbolButtonComponent,
    ArbolLabelComponent,
    ArbolIconComponent,
    ArbolLinkComponent
  ]
})
export class ThemeModule {
}
