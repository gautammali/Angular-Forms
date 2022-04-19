import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransfer'
})
export class CurrencyTransferPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value*76.24);
  }

}
