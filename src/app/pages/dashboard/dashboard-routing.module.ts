import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from "./task/task.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task'
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'update-task/:id',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
