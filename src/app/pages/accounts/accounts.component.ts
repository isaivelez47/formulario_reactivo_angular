import { Component, OnInit } from '@angular/core';
import { CurrencyFormatAccount } from 'src/app/pipes/currencyFormatAccount.pipe';
import { FormStatusService } from 'src/app/services/form-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [
    CurrencyFormatAccount
  ]
})
export class AccountsComponent implements OnInit {

  accounts: any[];

  constructor(
    private router: Router,
    private _formService: FormStatusService,
  ) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accounts = mockAccounts;
  }

  selectAccount(account) {
    if (account.salary !== 0) {
      this._formService.setOriginAccount(account.number);
      this.router.navigate(['step-two']);
    }
  }
}

export const mockAccounts = [
  {
    type: 'ahorros',
    number: 5716,
    salary: 3000000
  },
  {
    type: 'corriente',
    number: 1234,
    salary: 200000
  },
  {
    type: 'corriente',
    number: 5678,
    salary: 200000
  },
  {
    type: 'ahorros',
    number: 9012,
    salary: 200000
  },
  {
    type: 'corriente',
    number: 5232,
    salary: 0
  }
];

