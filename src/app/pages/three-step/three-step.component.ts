import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'fecha', name: '14/06/2019 11:46 am' },
  { position: 'tipo de inversión', name: 'CDT virtual' },
  { position: 'cuenta origen', name: 'ahorros ****1234' },
  { position: 'monto', name: '$200.000' },
  { position: 'fecha vencimiento', name: '12/09/2019 11:46 am' },
  { position: 'acción vencimiento', name: 'abonar a tu cuenta', },
  { position: 'plazos en días', name: '90', },
  { position: 'tasa efectiva anual', name: '4,6', },
  { position: 'modo pago intereses', name: 'abonar a tu cuenta', },
  { position: 'moneda', name: 'COP', },
  { position: 'costo trx', name: 'Neon', },
  { position: 'dirección IP', name: '100.120.49.31', },


];

@Component({
  selector: 'app-three-step',
  templateUrl: './three-step.component.html',
  styleUrls: ['./three-step.component.scss']
})
export class ThreeStepComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
