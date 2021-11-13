import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
//--included commom array-- import { DepartmentContactComponent } from './department-contact/department-contact.component';

//Use a common array (routingComponent) in app-routing.module.ts to store emplist and deplist,DRY
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // DepartmentListComponent,
    // EmployeeListComponent
    routingComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
