import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, units: string = ''): number {
    if (!value) {
      return 0;
    }
    const km = parseFloat(value) * 1.60934;
    return units === 'meters' ? km * 1000 : km;
  }

}
