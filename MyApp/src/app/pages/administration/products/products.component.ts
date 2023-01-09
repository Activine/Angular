import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, Observable, tap } from 'rxjs';
import { ApiProduct, Product } from 'src/app/shared/interface/products.interface';
import { generationProducts } from '../../shop/shared/services/products.service';
import { FilterService } from '../../shop/shared/services/filter.service';
import { TodosService } from '../../shop/shared/services/products2.service';
// import { Todo, TodosService } from '../../shop/shared/services/products2.service';
// import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private generationProducts: generationProducts,
    private configService: FilterService,
    private todosService: TodosService
  ) { }

  items: Observable<ApiProduct[]> = this.todosService.fetchTodos()

  products: Observable<Product[]>
  priceSort: boolean = false;
  nameSort: boolean = false;
  IDSort: boolean = false;
  @ViewChild('priceInput') priceInput: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  password: number
  val: string


  ngOnInit(): void {
    this.products = this.generationProducts.getArr()
  }

  sortPrice() {
    console.log(1);
    if (this.priceSort) {
      this.items.subscribe((data) => {
        console.log(data);
        data.sort((a: ApiProduct, b: ApiProduct) => a.price < b.price ? 1 : -1)
      })
      this.priceSort = false;
      console.log(2);
      return
    }
    if (!this.priceSort) {
      this.items.subscribe((data) => {
        console.log(data);
        data.sort((a: ApiProduct, b: ApiProduct) => {
          console.log(a.price < b.price);
          return a.price > b.price ? 1 : -1
        });
      })
      console.log(3);
      this.priceSort = true;
      return
    }
  }

  sortName() {
    if (this.nameSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.name < b.name ? 1 : -1)
      })
      this.nameSort = false;
      return
    }
    if (!this.nameSort) {
      this.generationProducts.getArr().subscribe((data) => {
        data.sort((a: Product, b: Product) => a.name > b.name ? 1 : -1)
      })
      this.nameSort = true;
      return
    }
  }

  sortID() {
    if (this.IDSort) {
      this.items.subscribe((data) => {
        data.sort((a: ApiProduct, b: ApiProduct) => a.id < b.id ? 1 : -1)
        console.log(data);

      })
      this.IDSort = false;
      return
    }
    if (!this.IDSort) {
      this.items.subscribe((data) => {
        data.sort((a: ApiProduct, b: ApiProduct) => a.id > b.id ? 1 : -1)
        console.log(data);

      })
      this.IDSort = true;
      return
    }
  }

  setSelect(event: any) {
    console.log(this.val);

    // if (!event.value) {
    //   this.configService.setSelect('');
    // } else {
    //   this.configService.setSelect(event.value);
    // }
  }

  ngAfterViewInit() {
    // fromEvent(this.priceInput.nativeElement, 'input')
    // .pipe(
    //   debounceTime(1000),
    //   map((event: any) => console.log(event.target.value))
    // )

    if (this.priceInput) {
      fromEvent(this.priceInput.nativeElement, 'input')
        .pipe(
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => {
          // this.configService.setPrice(+data)
          console.log(+data);

        });
    }

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value)
      )
      .subscribe((data) => {
        this.configService.setSearch(data)
        console.log(data);
      });
  }
  clickApply() {
      // fromEvent(this.priceInput.nativeElement, 'input')
      //   .pipe(
      //     debounceTime(1000),
      //     map((event: any) => event.target.value)
      //   )
      //   .subscribe((data) => {
      //     // this.configService.setPrice(+data)
      //     console.log(+data);
      //   });
    console.log(this.password);
    if (!this.password || !this.val) {
      console.log('input or checkbox is empty')
      return
    }
    if (this.password && this.val) {
      this.generationProducts.getArr().subscribe((data: any) => {
        data.filter((el: Product) => {
          console.log(el.price > this.password);
          el.price > this.password
        })
        // console.log(this.arr);

      })

      // .subscribe((data) => {
      //   data.filter((el: Product) => {
      //     console.log(el.price);
      //     console.log(this.password);

      //     el.price > this.password

      //   })
        // data.sort((a: Product, b: Product) => a.price < b.price ? 1 : -1)
      // })
    }
    }
}
