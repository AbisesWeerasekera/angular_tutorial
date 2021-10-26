import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [ //an array of objects
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Brandon","age":25},
      {"id":3,"name":"Christina","age":26},
    ];
  }
}
