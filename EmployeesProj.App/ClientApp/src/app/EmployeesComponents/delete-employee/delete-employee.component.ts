import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

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

  deleteEmployee(): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.employeeService.deleteEmployee(this.employee.id)
        .subscribe((data: Employee) => {
          this.employee = data;
          window.alert(`Empleado/a ${this.employee.name} ${this.employee.surname} ha sido eliminado con exito!`);
          this.cancel();
        });
    }
    
  }

  cancel(): void {
    this.location.back();
  }
}
