import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./@components/components.module";
import {LayoutModule} from "./@layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {EnsureAuthenticateService} from "./@data/services/auth/ensure-authenticate.service";
import {MarkdownModule} from "ngx-markdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BranchService} from "./@data/services/branch/branch.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [EnsureAuthenticateService, BranchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
