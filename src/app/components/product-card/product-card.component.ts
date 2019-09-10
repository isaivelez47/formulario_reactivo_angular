import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit() {
    //this.setBackgroundImage();
    console.log(this.product);
  }

  setBackgroundImage() {
    const elem = (document.getElementById('product-image') as HTMLDivElement);
    elem.style.background = "url('" + this.getUrl() +"')";
  }

  getUrl() {
    return this.product.urlImagen;
  }

}
