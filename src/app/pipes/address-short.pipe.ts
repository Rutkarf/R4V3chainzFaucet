// address-short.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressShort',
  standalone: true
})
export class AddressShortPipe implements PipeTransform {
  transform(value: string, start: number = 6, end: number = 4): string {
    if (!value || value.length < start + end) return value;
    return `${value.slice(0, start)}...${value.slice(-end)}`;
  }
}
