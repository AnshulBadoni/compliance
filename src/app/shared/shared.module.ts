import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// components
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderboxComponent } from './headerbox/headerbox.component';
import { StatsComponent } from './stats/stats.component';
import { TableComponent } from './table/table.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HeaderboxComponent,
    StatsComponent,
    TableComponent,
    SettingsComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    HeaderboxComponent,
    StatsComponent,
    TableComponent,
    SettingsComponent,
    NotificationComponent
  ],
  providers: [
    HttpClient,
    // NotificationService
],
})
export class SharedModule { }