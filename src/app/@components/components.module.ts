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
import { ArbolTextareaComponent } from './arbol-textarea/arbol-textarea.component';
import { ArbolContentHeaderComponent } from './arbol-content-header/arbol-content-header.component';
import { ArbolInputTextComponent } from './arbol-input-text/arbol-input-text.component';
import { ArbolCheckboxComponent } from './arbol-checkbox/arbol-checkbox.component';

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
    ArbolTextareaComponent,
    ArbolContentHeaderComponent,
    ArbolInputTextComponent,
    ArbolCheckboxComponent,
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
    ArbolModalHeaderComponent,
    ArbolModalBodyComponent,
    ArbolTextareaComponent,
    ArbolContentHeaderComponent,
    ArbolInputTextComponent,
    ArbolCheckboxComponent
  ]
})
export class ComponentsModule {
}
