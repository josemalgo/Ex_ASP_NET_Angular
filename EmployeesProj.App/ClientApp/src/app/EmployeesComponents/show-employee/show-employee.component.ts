import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../employee.service';
import { FilterPipe } from '../../Pipes/filter.pipe'

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  idSelected: string | undefined;
  HighlightRow: number | undefined;
  private _searchText: string = "";
  employeesFiltered: Employee[] = [];

  get searchText(): string {
    return this._searchText;
  }
  set searchText(val: string) {
    this._searchText = val;
    this.employeesFiltered = this.filter.transform(this.employees, val );
  }

  constructor(private employeeService: EmployeeService, private filter: FilterPipe) {

  }

  ClickedRow(index: number): void {
    this.HighlightRow = index;
    if (this.employeesFiltered.length == 0)
      this.idSelected = this.employees[index].id;
    else
      this.idSelected = this.employeesFiltered[index].id;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe((data: Employee[]) => this.employees = data)
  }
}
