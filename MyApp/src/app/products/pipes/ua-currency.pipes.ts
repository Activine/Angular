import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uaCurrency'})
export class UaCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return `₴${value}`;
  }
}
