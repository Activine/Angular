import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../../../../shared/interface/products.interface';

export interface filter {
  search: string;
  select: string;
}

const filter: filter = {
  search: '',
  select: ''
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  configuration$: BehaviorSubject<filter> = new BehaviorSubject(
    filter
  );

  get DefaultConfiguration() {
    console.log('234', this.configuration$.getValue());

    return this.configuration$.getValue();
  }
  // addToCart(product: Product) {
  //   this._filter$.next([
  //     ...this._filter$.getValue(),
  //     product
  //   ])
  // }

  setSearch(search: string) {
    console.log(search);

    this.configuration$.next({
      ...this.DefaultConfiguration,
      search,
    });
  }
  // setPrice(price: number) {
  //   this.configuration$.next({
  //     ...this.DefaultConfig,
  //     price,
  //   });
  // }
  setSelect(select: string) {
    this.configuration$.next({
      ...this.DefaultConfiguration,
      select,
    });
  }
}
