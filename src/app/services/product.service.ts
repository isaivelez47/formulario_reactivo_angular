
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts() {
    return this.mockProducts;
  }

  mockProducts: product[] = [
    {
      title: 'Itaú rentable',
      subtitle: 'mejora tus ingresos',
      text: 'la combinación perfecta entre disponibilidad del dinero y rentabilidad.',
      buttonText: 'conocer más',
      routeUrl: 'itau-rentable',
      urlImagen: './../../../assets/images/itau-rentable.png'
    },
    {
      title: 'ahorro programado',
      subtitle: 'mejora tus ingresos',
      text: 'alcanza tus metas a mediano y largo plazo con abonos periódicos desde tu cuenta transaccional.',
      buttonText: 'conocer más',
      routeUrl: 'mejora-tus-ingresos',
      urlImagen: './../../../assets/images/ahorro-programado.jpg'
    },
    {
      title: 'CDT virtual',
      subtitle: 'mejora tus ingresos',
      text: 'invierte a palzo y tasa fija a través de nuestros canales virtuales.',
      buttonText: 'conocer más',
      routeUrl: 'cdt-virtual',
      urlImagen: './../../../assets/images/ahorro-e-inversion.png'
    }
  ];
}


export interface product {
  title: string,
  subtitle: string,
  text: string,
  buttonText: string,
  routeUrl: string,
  urlImagen: string
}
