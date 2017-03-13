import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Employee,
         EmployeeService }    from './employee.service';

@Component({
  template: `
    <h3 highlight>Employee Detail</h3>
    <div *ngIf="employee">
      <div>Id: {{employee._id}}</div><br>
      <label>Name:
        <input [(ngModel)]="employee.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Employee List</a>
  `
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.employeeService
      .getEmployee(id).subscribe(employee => 
      {
        this.employee = employee
      },(error: any)=>console.log(error));
  }
}
