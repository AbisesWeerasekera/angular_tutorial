import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevolution',
  templateUrl: './cevolution.component.html',
  styleUrls: ['./cevolution.component.css']
})
export class CevolutionComponent implements OnInit {
  //properties
  //property binding
  public myId = "textid";
  //----
  //class binding
  public successClass = "text_warning";
  public hasError = false;

  public messageClass = { //object
    "text_success": !this.hasError,
    "text_warning": this.hasError
  }
  //----

  //style binding
  public highlight = "orange";
  public title = {
    color: "brown",
    fontStyle: "italic"
  }

  public greeting = "";//event binding

  public name="";//two way binding

  public displayName=true; //Structural directives ngIf directive
  public displayName1 = false;//Structural directives *ngIf directive ex1
  public displayName2 = false;//Structural directives *ngIf directive ex2

  public switchcolor="blue";//structural directives ngSwitch

  public colors=["red","blue","green","yellow"] //structural directives ngFor => This is the resource array

public myname="Abises";//pipes
public person={//pipes json object
  "firstName":"John",
  "lastName":"Doe"
}

public date=new Date();//pipes

  constructor() { }

  ngOnInit(): void {
  }

  //event binding
  // 

  onClick1() {
    console.log("Welcome Abises");
    this.greeting = "Welcome SLT";
  }

  onClick(event: any) {
    console.log(event.type); //event means an associative array
    this.greeting = "Welcome SLT" + event;
  }

  onClick2(value: any) {
    console.log("this is the value you have entered =" + value);

  }




}
