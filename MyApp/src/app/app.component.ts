import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface Data {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Study App';

  carArr: Array<string> = ['Kia', 'Nissan', 'Mitsubishi', 'Toyota', 'Daewoo', 'Citroen', 'Mazda', 'Renault']
  conditionArr: Array<string> = ['БУ (вложений не требует)', 'Новая (с автосалона)', 'На запчасти', 'После ДТП', 'Не растаможена']

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generationArr(name: Array<string>, value: Array<string>) {
    return name.map((el: string, i: number) => {
      return {
        id: uuidv4(),
        name: el + ' ' + value[this.getRandomInt(0, value.length)],
        price: this.getRandomInt(1000, 10000)
      }
    })
  }

  dataArr: Array<Data> = this.generationArr(this.carArr, this.conditionArr)
}
