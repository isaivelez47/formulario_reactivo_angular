import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.scrollToTop();
    this.getProducts();
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }
}

