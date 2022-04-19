import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricepipe'
})
export class SerchPPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return `${value}"----price  💲90";`
  }

}
