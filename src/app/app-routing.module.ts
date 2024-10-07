import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'compliance', loadChildren: () => import('./root/root.module').then(m => m.RootModule) },
  // { path: 'task', loadChildren: () => import('./root/task/task.module').then(m => m.TaskModule) },
  
  { path: '**', redirectTo: 'compliance', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
