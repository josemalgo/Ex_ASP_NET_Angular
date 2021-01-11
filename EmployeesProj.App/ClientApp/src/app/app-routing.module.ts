import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeeComponent } from './EmployeesComponents/show-employee/show-employee.component';
import { AddEmployeeComponent } from './EmployeesComponents/add-employee/add-employee.component';
import { EditEmployeeComponent } from './EmployeesComponents/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './EmployeesComponents/delete-employee/delete-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/show', pathMatch: 'full' },
  { path: 'show', component: ShowEmployeeComponent},
  { path: 'add', component: AddEmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: 'delete/:id', component: DeleteEmployeeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
