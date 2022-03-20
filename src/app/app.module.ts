import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ThemeModule} from "./@theme/theme.module";
import {LayoutModule} from "./@layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {EnsureAuthenticateService} from "./@data/services/auth/ensure-authenticate.service";
import {MarkdownModule} from "ngx-markdown";
import {SelectedBranchService} from "./@data/services/branch/selected-branch.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [EnsureAuthenticateService, SelectedBranchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
