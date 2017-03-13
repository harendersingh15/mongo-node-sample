import { Component, OnInit } from '@angular/core';

import {
  Employee,
  EmployeeService
} from './employee.service';

@Component({
  template: `
    <h3 highlight>Employee List</h3>
       <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Age</th>
        <th><a href="javascript:void(0)" (click)="addNewUser = !addNewUser">Add New</a></th>
      </tr>
    </thead>
    <tbody>
    <tr *ngIf="addNewUser">
    <td>
      <input type="text" [(ngModel)]="userName" required  focused="true" placeholder="name...">
    </td>
    <td>
      <input type="text" [(ngModel)]="userMobileNumber" maxlength="10" minlenght = "10"  required placeholder="mobile...">
    </td>
    <td>
      <input type="text" [(ngModel)]="userAge" required placeholder="age...">
    </td>
    <td>
      <a href="javascript:void(0)" (click)="saveEmployee()" >save</a> |
      <a href="javascript:void(0)" (click)="addNewUser = !addNewUser" >X</a>
    </td>
    </tr>
      <tr  *ngFor='let employee of employees'>
        <td> <a routerLink="/employee/{{employee._id}}">{{employee.name}}</a></td>
        <td>{{employee.mobile}}</td>
        <td>{{employee.age}}</td>
        <td><a href="javascript:void(0)" (click)="deleteEmployee(employee._id)" >X</a></td>
      </tr>
    </tbody>
  </table>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }
  addNewUser = false;
  userName: string = '';
  userMobileNumber: string = '';
  userAge: number;

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService
      .getEmployees()
      .subscribe((data => {
        this.employees = data;
      }), (error: any) => {
        console.log(error);
      })
  }

  saveEmployee() {
    if (this.userName && this.userAge && this.userMobileNumber) {
      let emp = new Employee(0, this.userName, this.userAge, this.userMobileNumber);
      this.employeeService
        .newEmployee(emp)
        .subscribe((data => {
          this.employees.push(data.json());
          this.addNewUser = false;
          this.userAge = null;
          this.userMobileNumber = '';
          this.userName = '';
        }), (error: any) => {
          console.log(error);
        });
    } else {
      window.alert('Please fill all fields');
    }

  }

  deleteEmployee(id: string) {
    this.employeeService
      .deleteEmployeeById(id)
      .subscribe((data => {
        this.getAllEmployee();
      }), (error: any) => {
        console.log(error);
      })
  }
}
