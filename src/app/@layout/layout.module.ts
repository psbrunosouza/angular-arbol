import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BranchSetComponent } from './branch-set/branch-set.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import {ThemeModule} from "../@theme/theme.module";
import { BranchComponent } from './branch-set/branch/branch.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    BranchSetComponent,
    HeaderComponent,
    PageComponent,
    BranchComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule
  ]
})
export class LayoutModule { }
