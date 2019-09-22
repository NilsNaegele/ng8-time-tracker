import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelize'
})
export class CamelizePipe implements PipeTransform {

  transform(input: any): string {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/-/g, '');
  }

}
