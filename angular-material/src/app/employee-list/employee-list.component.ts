import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  /*20 VIDEO
 belongs to retrieve data without a mock server at assests
   only retrieved from employee.service.ts 
 // public employee: any = [];

 // constructor(private _employeeService: EmployeeService) {
 // }

 // ngOnInit(): void {
 //   this.employee = this._employeeService.getEmployees();
 // }
*/

  public employee: any = [];
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employee = data,error=>this.errorMsg=error);
    
  }
}
