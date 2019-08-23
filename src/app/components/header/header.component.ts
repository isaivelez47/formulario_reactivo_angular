import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  tabActivo: number = 0;

  constructor() { }

  cambiarTab(nuevoIndex) {
    this.tabActivo = nuevoIndex;
    return this.tabActivo;
  }

}
