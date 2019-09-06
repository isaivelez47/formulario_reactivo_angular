/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UdpCurrencyMaskPipe } from './UdpCurrencyMaskPipe.pipe';

xdescribe('Pipe: UdpCurrencyMaskPipee', () => {

  it('convert $1,000,000.00 to 1000000', () => {
    let pipe = new UdpCurrencyMaskPipe();
    pipe.transform('$1,000,000.00');
    var amount = pipe.amount;
    expect(amount).toEqual('1000000');
  });

  it('convert $100.001 to 1001', () => {
    let pipe = new UdpCurrencyMaskPipe();
    pipe.transform('$100.001');
    var amount = pipe.amount;
    expect(amount).toEqual('1001');
  });



});
