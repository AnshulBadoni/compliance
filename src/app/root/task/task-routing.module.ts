import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { CreatetaskComponent } from './createtask/createtask.component';

const routes: Routes = [
     {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: '',
        component: CreatetaskComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
