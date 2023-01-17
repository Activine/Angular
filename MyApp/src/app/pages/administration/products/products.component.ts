import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  filter,
  forkJoin,
  fromEvent,
  map,
  merge,
  Observable, of, startWith, switchMap,
  tap
} from 'rxjs';
import { ApiProduct, Product } from 'src/app/shared/interface/products.interface';
import { generationProducts } from '../../shop/shared/services/products.service';
import { FilterService } from '../../shop/shared/services/filter.service';
import { TodosService } from '../../shop/shared/services/products2.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';

type Sorting = { fieldName: string, value: string } | null;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(
    private generationProducts: generationProducts,
    private configService: FilterService,
    private todosService: TodosService,
    private dialog: MatDialog
  ) { }

  items$: Observable<ApiProduct[]>;

  products: ApiProduct[];
  // products: Observable<Product[]>
  priceSort: boolean = false;
  nameSort: boolean = false;
  IDSort: boolean = false;
  @ViewChild('priceInput') priceInput: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  password: number
  val: string

  sort$: BehaviorSubject<Sorting> =
    new BehaviorSubject<Sorting>(null);

  sortName$: BehaviorSubject<Sorting> =
    new BehaviorSubject<Sorting>(null);

  search$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  sorting$: Observable<[Sorting, Sorting, string]> = combineLatest([
    this.sort$,
    this.sortName$,
    this.search$
  ]);

  showModalAdd: boolean = false

  initData() {
    this.items$ =
    combineLatest([
      this.sort$,
      this.sortName$,
      this.search$
    ])
    .pipe(
      switchMap((
        [sort, sortName, search]: [Sorting, Sorting, string],
      ): Observable<ApiProduct[]> => {
        console.log(search, 777);
        return this.todosService.fetchTodos(sort).pipe(
          map((prods: ApiProduct[]): ApiProduct[] => {
            let res = prods;

            if(search) {
              res = prods.filter((prod: ApiProduct): boolean => {
                return prod.name.toLowerCase().includes(search) ||
                 prod.price.toString().toLowerCase().includes(search);
              })
            }

            return res;
          })
        );
      }),
    );
  }

  ngOnInit(): void {
    // this.products = this.generationProducts.getArr();

    // 1
    // this.sort$.subscribe((res)=>{
    //   this.items$ = this.todosService.fetchTodos(res);
    // });
    // this.sortName$.subscribe((res)=>{
    //   this.items$ = this.todosService.fetchTodos(res);
    // });


    //2
    this.initData()
    console.log(1);


    // this.items$ =
    //   combineLatest([
    //     this.sort$,
    //     this.sortName$,
    //     this.search$
    //   ])
    //   .pipe(
    //     switchMap((
    //       [sort, sortName, search]: [Sorting, Sorting, string],
    //     ): Observable<ApiProduct[]> => {
    //       console.log(search, 777);
    //       return this.todosService.fetchTodos(sort).pipe(
    //         map((prods: ApiProduct[]): ApiProduct[] => {
    //           let res = prods;

    //           if(search) {
    //             res = prods.filter((prod: ApiProduct): boolean => {
    //               return prod.name.toLowerCase().includes(search) ||
    //                prod.price.toString().toLowerCase().includes(search);
    //             })
    //           }

    //           return res;
    //         })
    //       );
    //     }),
    //   );



    // 3 (sorting on FE)
    // this.todosService.fetchTodos(null).subscribe((res)=> {
    //   this.products = res;
    //
    //   this.items$ =
    //     combineLatest([
    //       this.sort$,
    //       this.sortName$,
    //     ])
    //       .pipe(
    //         switchMap((
    //           [sort, sortName]: [Sorting, Sorting],
    //         ): Observable<ApiProduct[]> => {
    //           console.log([sort?.fieldName], 777);
    //           // return this.todosService.fetchTodos(sort);
    //           return of(this.products).pipe(
    //             startWith(this.products),
    //             map((prods) => {
    //               return prods && prods.sort();
    //             })
    //           );
    //         }),
    //       );
    // });
  }

  sortPrice(event: string): void {
    console.log({event}, 7777);

    this.sort$.next({
      fieldName: 'price',
      value: event
    });
  }

  showModal() {
    this.dialog.open(ProductModalComponent, {
      height: '500px',
      width: '300px'
    })
  }

  sortName(event: string) {
    this.sort$.next({
      fieldName: 'name',
      value: event
    });
  }

  delete(event: string) {
    this.todosService.removeTodo(event).subscribe(() => this.initData())
  }

  handleAdd() {
    this.showModalAdd = !this.showModalAdd
  }

  sortID() {
    if (this.IDSort) {
      this.items$.subscribe((data) => {
        data.sort((a: ApiProduct, b: ApiProduct) => a.id < b.id ? 1 : -1)
        console.log(data);

      })
      this.IDSort = false;
      return
    }
    if (!this.IDSort) {
      this.items$.subscribe((data) => {
        data.sort((a: ApiProduct, b: ApiProduct) => a.id > b.id ? 1 : -1)
        console.log(data);

      })
      this.IDSort = true;
      return
    }
  }

  setSelect(event: any) {
    console.log(this.val);
  }

  ngAfterViewInit() {
    if (this.priceInput) {
      fromEvent(this.priceInput.nativeElement, 'input')
        .pipe(
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => {
          console.log(+data);
        });
    }

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(1000),
        map((event: any) => this.search$.next(event.target.value))
      ).subscribe();
  }

  clickApply() {
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
      })
    }
  }
}
