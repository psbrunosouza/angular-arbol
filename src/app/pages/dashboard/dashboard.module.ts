import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TaskComponent } from './task/task.component';
import {LayoutModule} from "../../@layout/layout.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../../@components/components.module";
import {QuillModule} from "ngx-quill";


@NgModule({
  declarations: [
    DashboardComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    FormsModule,
    ComponentsModule,
    QuillModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
