import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//forms walata
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

//register
import {MatStepperModule} from '@angular/material/stepper';
import { ProfileComponent } from './profile/profile.component';

//profile card
import {MatCardModule} from '@angular/material/card';
//profile expansion panel
import {MatExpansionModule} from '@angular/material/expansion';

//profile dialog box
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './profile/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { TableComponent } from './table/table.component';

import {MatTableModule} from '@angular/material/table';
import { CevolutionComponent } from './cevolution/cevolution.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';

import { HttpClientModule } from '@angular/common/http';//import http client module


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DialogContentExampleDialogComponent,
    TableComponent,
    CevolutionComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
