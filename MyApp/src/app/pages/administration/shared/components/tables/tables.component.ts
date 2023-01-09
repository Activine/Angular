import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interface/products.interface';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() items: any[] | null;

  @Output() handlePrice = new EventEmitter<string>();
  @Output() handleName = new EventEmitter();
  @Output() handleID = new EventEmitter();

  priceSort: string = ''; // '' | 'asc' | 'desc'
  nameSort: string = ''; // '' | 'asc' | 'desc'

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id:any) {
    console.log(id);
    // this.items.subscribe((data: any) =>
    //     data.find((el: any) => {
    //     el.id == id
    //     console.log(el.id == id);
    //     return el.id == id
    //   })
    // );

    // this.items.next()
  }
  onPriceSort() {
    this.nameSort = '';

    if(this.priceSort === '') {
      this.priceSort = 'asc';
    } else if(this.priceSort === 'asc') {
      this.priceSort = 'desc';
    } else {
      this.priceSort = '';
    }

    this.handlePrice.emit(this.priceSort);
  }
  onNameSort() {
    this.priceSort = '';

    if(this.nameSort === '') {
      this.nameSort = 'asc';
    } else if(this.nameSort === 'asc') {
      this.nameSort = 'desc';
    } else {
      this.nameSort = '';
    }

    this.handleName.emit(this.nameSort);
  }

}
