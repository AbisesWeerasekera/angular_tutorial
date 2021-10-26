import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

//@Input() public parentData:any;// 1st method 
@Input('parentData') public name:any;//2nd method child to parent

@Output() public childEvent=new EventEmitter();//parent ot child

  constructor() { }

  fireEvent(){
    this.childEvent.emit("Hey Abises we Love you");
  }

  ngOnInit(): void {
  }

}
