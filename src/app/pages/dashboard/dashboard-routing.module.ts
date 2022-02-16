import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryComponent} from "./diary/diary.component";

const routes: Routes = [
  {
    path: 'diary',
    component: DiaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
