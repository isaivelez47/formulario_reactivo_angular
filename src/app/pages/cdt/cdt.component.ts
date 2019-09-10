import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdt',
  templateUrl: './cdt.component.html',
  styleUrls: ['./cdt.component.scss']
})
export class CdtComponent implements OnInit {

  options = mockOptions;
  constructor() { }

  ngOnInit() {
    console.log(this.options);
  }

}

export const mockOptions = {
  beneficios: {
    text: 'Invierte a plazo y tasa fija desde la comodidad de tu casa u oficina, a través de nuestros canales virtuales.',
    checks: [
      'tasas competitivas con rentabilidad garantizada.',
      'puedes escoger la periodicidad de pago de tus intereses: mensual o al vencimiento.',
      'facilidad de negociación del título valor en mercado secundario, a través de Itaú Comisionista de Bolsa.',
      'podrás transferir tu título mediante endoso.',
      'no necesitas documentos.'
    ]
  },
  caracteristicas: {
    checks: [
      'puedes invertir desde $200.000.',
      'la rentabilidad de tu CDT va de acuerdo al monto y plazo.',
      'cuentas con plazos desde 90 días hasta 360 días.',
      'el pago de los intereses y el capital se realiza a tu cuenta de ahorro o corriente de Itaú.',
      'en la constitución tienes la posibilidad de elegir si quieres renovar automáticamente tu inversión.',
      'antes del vencimiento podrás decidir  si quieres renovar automáticamente tu inversión o cancelarla en el vencimiento.',
      'este producto cuenta con Seguro de Depósito de Fogafín.'
    ]
  },
  requisitos: {
    checks: [
      'tener una cuenta de ahorro o corriente activa itaú.',
      'contar con acceso al portal web y app de itaú.'
    ]
  }
};

