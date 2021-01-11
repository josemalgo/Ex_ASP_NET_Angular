import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './EmployeesComponents/add-employee/add-employee.component';
import { EditEmployeeComponent } from './EmployeesComponents/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './EmployeesComponents/delete-employee/delete-employee.component';
import { ShowEmployeeComponent } from './EmployeesComponents/show-employee/show-employee.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FilterPositionPipe } from './Pipes/filter-position.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ShowEmployeeComponent,
    FilterPipe,
    FilterPositionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
