import { Component, OnInit } from '@angular/core';
import { FormStatusService } from './../../services/form-status.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyFormat } from 'src/app/pipes/currencyFormat.pipe';
import { ReplacePipe } from 'src/app/pipes/replace.pipe';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  providers: [
    CurrencyFormat,
    ReplacePipe
  ]
})
export class StepTwoComponent implements OnInit {

  cdtForm: FormGroup;
  cdtGlobalForm: any;
  frecuencies: string[];
  destinations: string[];

  constructor(
    private _formService: FormStatusService,
    private _fb?: FormBuilder
  ) { }

  ngOnInit() {
    this.getGlobalForm();
    this.initReactiveForm();
    this.loadFrecuencies();
    this.loadDestinations();
    this.onChangeExpirationWay();
  }

  getGlobalForm() {
    this.cdtGlobalForm = this._formService.getForm();
    console.log(this.cdtGlobalForm.price);
  }

  initReactiveForm() {
    this.cdtForm = this._fb.group({
      origin_account: ['1234', Validators.required],
      way_pay: [this._formService.getForm().way_pay, Validators.required],
      frecuency_pay: ['', Validators.required],
      expiration_way: ['', Validators.required],
      destination_account: ['']
    });

    console.log(this.cdtForm.value);
  }

  loadFrecuencies() {
    this.frecuencies = mockFrecuencies;
  }

  loadDestinations() {
    this.destinations = mockDestinations;
  }

  onChangeExpirationWay() {
    this.cdtForm.controls.expiration_way.valueChanges.subscribe(newExpiration => {
      switch(newExpiration) {
        case 'renovar':
          this.cdtForm.patchValue({
            destination_account: null
          });
          this.cdtForm.controls.destination_account.clearValidators();
          this.cdtForm.controls.destination_account.updateValueAndValidity();
          break;
        case 'abonar a tu cuenta':
          this.cdtForm.controls.destination_account.setValidators([
            Validators.required
          ]);
          this.cdtForm.controls.destination_account.updateValueAndValidity();
          break;
        default:
          // code block
      }
    })
  }

  onSubmit() {
    alert('Submit!');
  }

  openAccountsPage() {
    alert('Opening accounts page!');
  }
}

export const mockFrecuencies = ['30 días', '90 días'];
export const mockDestinations = ['renovar', 'abonar a tu cuenta'];
