import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Employee {
  name: string;
  surname: string;
  position: string;
  salary: number;
  id: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = 'https://localhost:44301/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getEmployeesById(id: string): Observable<Employee> {
    const url = `${this.url}/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee, httpOptions);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/${id}`, employee, httpOptions);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${ id }`, httpOptions);
  }
}
