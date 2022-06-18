import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./@components/components.module";
import {LayoutModule} from "./@layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {EnsureAuthenticateService} from "./@data/services/auth/ensure-authenticate.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BranchService} from "./@data/services/branch/branch.service";
import {QuillModule} from "ngx-quill";

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
    QuillModule.forRoot({
      modules: {
        syntax: true,
        placeholder: 'Compose an epic...',
        history: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],                                         // remove formatting button
          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    })
  ],
  providers: [EnsureAuthenticateService, BranchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
