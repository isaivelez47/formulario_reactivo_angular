import { Injectable } from '@angular/core';
import { FormCDT } from './../interfaces/form-cdt';

@Injectable({
  providedIn: 'root'
})
export class FormStatusService {

  formCDT: FormCDT;

  constructor() {
    this.formCDT = {
      price: 200000,
      term: 48,
      rate: 4.6,
      origin_account: null,
      way_pay: 'abonar a tu cuenta',
      frecuency_pay: null,
      expiration_way: null,
      destination_account: '7777'
    }
  }

  getForm() {
    return this.formCDT;
  }

  setPrice(newPrice: number) {
    this.formCDT.price = newPrice;
  }

  setRate(newRate: number) {
    this.formCDT.rate = newRate;
  }

  setOriginAccount(newOriginAccount: string) {
    this.formCDT.origin_account = newOriginAccount;
  }

  setWayPay(newWayPay: string) {
    this.formCDT.way_pay = newWayPay;
  }

  setFrecuencyPay(newFrecuencyPay: number) {
    this.formCDT.frecuency_pay = newFrecuencyPay;
  }

  setExpirationWay(newExpirationWay: string) {
    this.formCDT.expiration_way = newExpirationWay;
  }

  setDestinationAccount(newDestinationAccount: string) {
    this.formCDT.destination_account = newDestinationAccount;
  }
}
