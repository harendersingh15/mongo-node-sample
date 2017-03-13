import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public mobile: string) { }
}

const EMPLOYEE: Employee[] = [
  new Employee(11, 'Mr. Nice', 20, '9999999999'),
  new Employee(12, 'Narco', 20, '9999999999'),
  new Employee(13, 'Bombasto', 20, '9999999999'),
  new Employee(14, 'Celeritas', 20, '9999999999'),
  new Employee(15, 'Magneta', 20, '9999999999'),
  new Employee(16, 'RubberMan', 20, '9999999999')
];

const FETCH_LATENCY = 500;

@Injectable()
export class EmployeeService {

  constructor(
    private http: Http
  ) { }

  getEmployees() {
    return this.http
      .get("/api/employee/")
      .map(data => {
        return data.json();
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  getEmployee(id: number | string) {
    return this.http
      .get('/api/employee/employee/' + id)
      .map(data => data.json())
      .catch((error: any) => {
        return Observable.throw(error);
      })
  }

  newEmployee(newEmp: Employee) {

    if (newEmp) {
      return this.http.post("/api/employee/employee", JSON.stringify({ "data": newEmp }),
        new RequestOptions({
          headers: new Headers({ "Content-Type": "application/json" })
        }))
        .map(data => {
          console.log('success');
          console.log(data);
          return data;
        })
        .catch((error: any) => {
          console.log('error');
          return Observable.throw(error);
        })
    }
    else
      return;
  }

  deleteEmployeeById(id: string) {
    return this.http.delete("/api/employee/employee/" + id)
      .map(data => data)
      .catch((error: any) => {
        return Observable.throw(error);
      })
  }

  updateEmployee() {

  }

}
