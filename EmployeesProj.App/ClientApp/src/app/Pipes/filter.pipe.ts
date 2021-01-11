import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.service';

@Pipe({
  name: 'appFilter'
})

@Injectable({
  providedIn: 'root'
})

export class FilterPipe implements PipeTransform {

  transform(items: Employee[], searchText: string): Employee[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(res => {
      return res.name.toLocaleLowerCase().includes(searchText)
        || res.surname.toLocaleLowerCase().includes(searchText)
        || res.position.toLocaleLowerCase().includes(searchText);
    })
  }

}
