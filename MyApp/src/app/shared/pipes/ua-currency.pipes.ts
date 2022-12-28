import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uaCurrency'})
export class UaCurrencyPipe implements PipeTransform {
  transform(value: number | null): string {
    if(typeof value !== 'number') {
      return `0 ₴`;
    }

    return `${value} ₴`;
  }
}
