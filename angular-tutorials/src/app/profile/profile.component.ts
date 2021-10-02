import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; // for the forms

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name = new FormControl();//to get data on to profile.compoent.ts, we use objects
email = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

save(){
  alert(this.name.value);
  alert(this.email.value);
}

}
