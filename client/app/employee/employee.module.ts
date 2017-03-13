import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { EmployeeComponent }       from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeListComponent }   from './employee-list.component';
import { routing }             from './employee.routing';

@NgModule({
  imports: [ SharedModule, routing ],
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
  ]
})
export class EmployeeModule { }
