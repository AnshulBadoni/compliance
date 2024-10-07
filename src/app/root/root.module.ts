import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { SharedModule } from "../shared/shared.module";
import { CalendorComponent } from './calendor/calendor.component';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RootComponent,
    CalendorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RootRoutingModule,
    SharedModule,
    TaskModule
],
  exports: [
    DashboardComponent
  ],
  providers: [
    HttpClient,
    // NotificationService
],
})
export class RootModule { }