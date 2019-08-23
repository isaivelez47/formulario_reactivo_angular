import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'udpCurrencyMask'
})
export class UdpCurrencyMaskPipe implements PipeTransform {
  amount: any;

  transform(value: any, args?: any): any {

    this.amount = String(value);
    const beforePoint = this.amount.split('.')[0];
    let integers = '';
    if (typeof beforePoint !== 'undefined') {
      integers = beforePoint.replace(/\D+/g, '');
    }

    const afterPoint = this.amount.split('.')[1];
    let decimals = '';
    if (typeof afterPoint !== 'undefined') {
      decimals = afterPoint.replace(/\D+/g, '');
    }

    let nuevoNumero = '';
    if (decimals.length > 2) {
      decimals = decimals.slice(0, 2);
      nuevoNumero = afterPoint.slice(2);
    }

    this.amount = integers + '' + nuevoNumero;

    return this.amount;
  }

}
