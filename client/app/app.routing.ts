import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
