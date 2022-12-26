import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { generationProducts } from './pages/shop/shared/services/products.service';
import { Product } from './shared/interface/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [generationProducts]
})
export class AppComponent implements OnInit {
  title = 'MyApp';

  constructor(private generationProducts: generationProducts) { }

  products: Array<Product>

  ngOnInit(): void {
    this.products = this.generationProducts.getRandomData()
  }
}
