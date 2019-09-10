import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStatusService } from 'src/app/services/form-status.service';

@Component({
  selector: 'app-plazo',
  templateUrl: './plazo.component.html',
  styleUrls: ['./plazo.component.scss']
})
export class PlazoComponent implements OnInit {

  plz: any[];

  public plazos: any[] = ['90', '120', '180', '360'];

  constructor(
    private router: Router,
    private _formService: FormStatusService,
  ) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.plz = mockPlazo;
  }

  selectPlazo(term) {
    this._formService.setTerm(term.term);
    this.router.navigate(['step-one']);
  }

}


export const mockPlazo = [
  {
    term: '90',
  },
  {
    term: '120',
  },
  {
    term: '180',
  },
  {
    term: '360',
  }
]