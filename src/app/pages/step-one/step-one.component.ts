import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  constructor(private router: Router) { }

  // tslint:disable-next-line:align
  rango = new FormControl('', [Validators.max(800000000), Validators.min(200000)]);

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl('/plazo');
  }

  stepTwo(form: NgForm) {
    console.log(form);
  }

}

