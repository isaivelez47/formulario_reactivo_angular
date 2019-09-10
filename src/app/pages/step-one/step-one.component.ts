import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormStatusService } from 'src/app/services/form-status.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  cdtForm: FormGroup;

  constructor(
    private router: Router,
    private _formService: FormStatusService,
    private _fb?: FormBuilder
  ) { }

  ngOnInit() {
    this.scrollToTop();
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.cdtForm = this._fb.group({
      price: [this._formService.getForm().price, Validators.required],
      term: [this._formService.getForm().term, Validators.required]
    });
    console.log(this.cdtForm.value);
  }

  onClick() {
    this.router.navigateByUrl('/plazo');
  }

  onSubmit() {
    this.router.navigate(['step-two']);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

}

