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

  public messageClass={ //object
    "text_success" : !this.hasError,
    "text_warning":this.hasError
  } 
//----

//style binding
public highlight = "orange";
public title = {
  color:"brown",
  fontStyle : "italic"
}

  constructor() { }

  ngOnInit(): void {
  }

}
