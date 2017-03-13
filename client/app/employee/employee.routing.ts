import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { EmployeeComponent }       from './employee.component';
import { EmployeeListComponent }   from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes = [
  { path: '',
    component: EmployeeComponent,
    children: [
      { path: '',    component: EmployeeListComponent },
      { path: ':id', component: EmployeeDetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
