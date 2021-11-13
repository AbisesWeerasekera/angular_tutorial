import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // 25 VIDEO let id = parseInt(this.route.snapshot.paramMap.get['id']); OR 16 line code

    //25 VIDEO REad the URL parameter ,snapshot method,it is working,
    // let id = this.route.snapshot.params['id'];
    // this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.departmentId = id;
    });
  }

  goPrevious() { // call when click previous button
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {// call when click Next button
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {// call when click back button
    let selectedId = this.departmentId ? this.departmentId : null;
    //VIDEO 27 this.router.navigate(['/departments',{id:selectedId}]);//second argument is an object
  
  //VIDEO 28
  this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
