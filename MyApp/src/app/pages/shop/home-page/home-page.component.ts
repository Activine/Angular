import { Component, OnInit } from '@angular/core';
import { generationProducts } from '../shared/services/products.service';
import { Product } from 'src/app/shared/interface/products.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private generationProducts: generationProducts) { }

  products: Observable<Product[]> = this.generationProducts.getArr();
  topProducts: Product[]

  topThree() {
     this.generationProducts.getArr().subscribe((data) => {
      this.topProducts = data.sort((a: Product, b: Product) => a.price < b.price ? 1 : -1).slice(0, 3)
      console.log(this.topProducts);
    })
    // this.topProducts = this.generationProducts.getArr().pipe(
    //   debounceTime(1000),
    //   take(3)
    // );
  }

  ngOnInit(): void {
    this.topThree()
  }
}
