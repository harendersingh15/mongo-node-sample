import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-title></app-title>
    <nav>
      <a routerLink="employee"  routerLinkActive="active">Employees</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

