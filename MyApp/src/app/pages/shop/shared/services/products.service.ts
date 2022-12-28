import { Injectable } from "@angular/core";
import { Product } from "../../../../shared/interface/products.interface";
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class generationProducts {
  constructor() {}

  carArr: Array<string> = ['Kia', 'Nissan', 'Mitsubishi', 'Toyota', 'Daewoo', 'Citroen', 'Mazda', 'Renault'];
  conditionArr: Array<string> = ['БУ (вложений не требует)', 'Новая (с автосалона)', 'На запчасти', 'После ДТП', 'Не растаможена'];
  public dataArr: Array<Product>;
  myProducts$ = new BehaviorSubject<Product[]>([]);

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generationArr(name: Array<string>, value: Array<string>): Array<Product> {
    return name.map((el: string): Product => {
      return {
        id: uuidv4(),
        name: el + ' ' + value[this.getRandomInt(0, value.length)],
        price: this.getRandomInt(1000, 10000)
      }
    })
  }

  getRandomData() {
    this.dataArr = this.generationArr(this.carArr, this.conditionArr);
    this.myProducts$.next(this.dataArr)
    return this.dataArr
  }

  getArr() {
    // console.log(this.dataArr);
    // console.log(this.myProducts$);
    return this.dataArr;
  }

  getProductTheme(id: string): Product | undefined {
    return this.dataArr.find(product => product.id == id)
  }
}
