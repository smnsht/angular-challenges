import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heavyCompu',
  standalone: true,
})
export class HeavyCompuPipe implements PipeTransform {
  transform(name: string, index: number): string {
    return `${name} - ${index}`;
  }
}
