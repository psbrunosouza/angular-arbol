import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DiaryComponent } from './diary/diary.component';
import {LayoutModule} from "../../@layout/layout.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DiaryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ]
})
export class DashboardModule { }
