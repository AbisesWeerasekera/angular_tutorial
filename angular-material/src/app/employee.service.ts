import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  /*20 VIDEO
  belongs to retrieve data without a mock server at assests
    only retrieved from employee.service.ts 
  // constructor() { }

  // getEmployees(){
  //   return [ //an array of objects
  //     {"id":1,"name":"Andrew","age":30},
  //     {"id":2,"name":"Brandon","age":25},
  //     {"id":3,"name":"Christina","age":26},
  //   ];
  // }
  */
  private _url: string = "../src/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);

  }
}
