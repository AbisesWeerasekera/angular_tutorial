import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  /*20 VIDEO
 belongs to retrieve data without a mock server at assests
   only retrieved from employee.service.ts 
//  public employee:any=[];

//   constructor(private _employeeService:EmployeeService) { }

//   ngOnInit(): void {
//     this.employee=this._employeeService.getEmployees();
//   }
*/

  public employee:any=[];

  constructor(private _employeeService:EmployeeService){}

  ngOnInit():void{
    this._employeeService.getEmployees().subscribe(data=>this.employee=data);
  }

}
