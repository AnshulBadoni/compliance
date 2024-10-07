import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

// components
import { CreatetaskComponent } from './createtask/createtask.component';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreatetaskComponent,
    TaskComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TaskRoutingModule,
    SharedModule,
],
  exports: [
    CreatetaskComponent
  ],
  providers: [
    HttpClient,
    // NotificationService
],
})
export class TaskModule { }