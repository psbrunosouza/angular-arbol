import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArbolInputComponent } from './arbol-input/arbol-input.component';
import { ArbolLabelComponent } from './arbol-label/arbol-label.component';
import { ArbolButtonComponent } from './arbol-button/arbol-button.component';
import { ArbolIconComponent } from './arbol-icon/arbol-icon.component';
import { ArbolLinkComponent } from './arbol-link/arbol-link.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ArbolModalComponent } from './arbol-modal/arbol-modal.component';
import { ArbolModalHeaderComponent } from './arbol-modal/arbol-modal-header/arbol-modal-header.component';
import { ArbolModalBodyComponent } from './arbol-modal/arbol-modal-body/arbol-modal-body.component';
import { ArbolModalFooterComponent } from './arbol-modal/arbol-modal-footer/arbol-modal-footer.component';

@NgModule({
  declarations: [
    ArbolInputComponent,
    ArbolLabelComponent,
    ArbolButtonComponent,
    ArbolIconComponent,
    ArbolLinkComponent,
    ArbolModalComponent,
    ArbolModalHeaderComponent,
    ArbolModalBodyComponent,
    ArbolModalFooterComponent,
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
    ArbolLinkComponent,
    ArbolModalComponent,
    ArbolModalFooterComponent,
    ArbolModalHeaderComponent
  ]
})
export class ThemeModule {
}
