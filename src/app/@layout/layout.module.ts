import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeStructureComponent } from './tree-structure/tree-structure.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import {ComponentsModule} from "../@components/components.module";
import { BranchComponent } from './tree-structure/tree-view/branch/branch.component';
import { TreeViewComponent } from './tree-structure/tree-view/tree-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuillModule} from "ngx-quill";

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TreeStructureComponent,
    HeaderComponent,
    PageComponent,
    BranchComponent,
    TreeViewComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
})
export class LayoutModule { }
