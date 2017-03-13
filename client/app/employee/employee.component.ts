import { Component }   from '@angular/core';

import { EmployeeService } from './employee.service';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [ EmployeeService ]
})
export class EmployeeComponent {
  constructor() { }
}
