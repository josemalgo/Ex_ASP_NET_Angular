import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../employee.service';
import { Location } from '@angular/common';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    name: "",
    surname: "",
    position: "",
    salary: 0,
    id: ""
  };

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

  addEmployee(): void {
    this.employee.salary = +this.employee.salary;
    this.employee.id = Guid.EMPTY;
    this.employeeService.addEmployee(this.employee)
      .subscribe(employ => {
        this.employees.push(employ);
        window.alert(`Empleado/a ${this.employee.name} ${this.employee.surname} ha sido creado con exito!`);
        this.cancel();
      });
  }

  cancel(): void {
    this.location.back();
  }

}
