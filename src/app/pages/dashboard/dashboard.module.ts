import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TaskComponent } from './task/task.component';
import {LayoutModule} from "../../@layout/layout.module";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../../@components/components.module";
import { MarkdownDisplayComponent } from './task/markdown-display/markdown-display.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskComponent,
    MarkdownDisplayComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    FormsModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
