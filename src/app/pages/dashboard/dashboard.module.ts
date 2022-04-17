import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DiaryComponent } from './diary/diary.component';
import {LayoutModule} from "../../@layout/layout.module";
import {MarkdownModule} from "ngx-markdown";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../../@components/components.module";
import { MarkdownDisplayComponent } from './diary/markdown-display/markdown-display.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    DashboardComponent,
    DiaryComponent,
    MarkdownDisplayComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MarkdownModule,
    FormsModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
