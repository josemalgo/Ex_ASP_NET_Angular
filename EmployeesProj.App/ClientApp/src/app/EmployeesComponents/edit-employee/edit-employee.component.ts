import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = {
    name: "",
    surname: "",
    position: "",
    salary: 0,
    id: ""
  };

  constructor(
    private employeeService: EmployeeService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      return;
    }
    else {
      this.employeeService.getEmployeesById(id)
        .subscribe((data: Employee) => this.employee = data);
    }
  }

  editEmployee(): void {
    this.employee.salary = +this.employee.salary;
    this.employeeService.updateEmployee(this.employee.id, this.employee)
      .subscribe(() => {
        window.alert(`Empleado/a ${this.employee.name} ${this.employee.surname} ha sido editado con exito!`);
        this.cancel();
      });
  }
  

  cancel(): void {
    this.location.back();
  }

}
