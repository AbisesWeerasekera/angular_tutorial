import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

show(){
  alert("Welcome to the Angular");
  console.log("Abises at the console")
}
show1(){
  alert("Welcome to the Angular 2");
}

}
