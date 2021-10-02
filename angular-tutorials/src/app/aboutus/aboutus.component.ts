import { Component, OnInit } from '@angular/core';

export interface Employee { // create an interface named Employee // we are going ot display data of employee
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

//create an Employee type array called employees
  employees:Employee[] = [
    {id:'1',name:"abises",email:"abises@gmail.com",password:"1234"},
    {id:'2',name:"gemba",email:"ses@gmail.com",password:"124"},
    {id:'3',name:"kavindu",email:"abi@gmail.com",password:"134"}
  ];


  constructor() { }

  ngOnInit(): void {


  }



  // show() {
  //   alert("Welcome to the Angular");
  //   console.log("Abises at the console")
  // }
  // show1() {
  //   alert("Welcome to the Angular 2");
  // }

}
