import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interface/products.interface';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() items: Observable<Product[]>

  @Output() handlePrice = new EventEmitter();
  @Output() handleName = new EventEmitter();
  @Output() handleID = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id:any) {
    console.log(id);
    this.items.subscribe((data: any) =>
        data.find((el: any) => {
        el.id == id
        console.log(el.id == id);
        return el.id == id
      })
    );

    // this.items.next()
  }

}
