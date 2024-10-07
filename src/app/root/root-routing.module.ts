import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RootComponent } from './root.component';
import { CalendorComponent } from './calendor/calendor.component';

const routes: Routes = [
     {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'calendar',
        component: CalendorComponent,
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
      }
    ]
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
