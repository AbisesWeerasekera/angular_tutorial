import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //import router service to pass parameters while navigating

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'Mongo' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  public selectedId: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    //VIDEO 27 ABSALOUTE ROUTES this.router.navigate(['/departments', department.id]);

    //VIDEO 28 relative routes
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
