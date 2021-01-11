import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPosition'
})
export class FilterPositionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
